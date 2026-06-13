import path from 'node:path';
import fs from 'fs-extra';
import fg from 'fast-glob';
import { Project, Scope, SyntaxKind, ClassDeclaration, ImportDeclaration } from 'ts-morph';

type GeneratorConfig = {
  /**
   * Absolute or relative path from project root
   * where original source code lives.
   */
  srcRoot: string;

  /**
   * Business modules root.
   * Generator scans this folder for shared extension files.
   */
  businessRoot: string;

  /**
   * Shared modules root.
   * Only classes imported from here can be extended.
   */
  sharedRoot: string;

  /**
   * Temporary generated source root.
   * This folder is built instead of srcRoot.
   */
  buildSrcRoot: string;

  /**
   * Name of extension file inside each business module.
   * Example: shared.ts
   */
  extensionFileName: string;

  /**
   * Suffix for extension classes.
   * Example: AlertTypeServiceShared -> target AlertTypeService
   */
  classSuffix: string;

  /**
   * Whether to fail if target class already has same property.
   * Recommended true.
   */
  failOnDuplicateProperty: boolean;
};

type TargetInfo = {
  className: string;
  importPath: string;
  resolvedImportAbsPath: string;
};

type ExtensionFileProcessResult = {
  extensionFileAbs: string;
  hasMergeableClasses: boolean;
  isEmpty: boolean;
};

class BuildSourceRelationGenerator {
  private readonly rootDir: string;
  private readonly config: GeneratorConfig;
  private readonly project: Project;

  constructor(config?: Partial<GeneratorConfig>) {
    this.rootDir = process.cwd();

    this.config = {
      srcRoot: 'src',
      businessRoot: 'src/graphql/endpoints/business',
      sharedRoot: 'src/graphql/endpoints/shared',
      buildSrcRoot: '.build',
      extensionFileName: 'shared.ts',
      classSuffix: 'Shared',
      failOnDuplicateProperty: true,
      ...config,
    };

    this.project = new Project({
      tsConfigFilePath: path.join(this.rootDir, 'tsconfig.json'),
      skipAddingFilesFromTsConfig: true,
    });
  }

  public async run(): Promise<void> {
    const start = Date.now();

    this.printConfig();

    await this.prepareBuildSource();

    const extensionFiles = await this.findExtensionFiles();

    if (extensionFiles.length === 0) {
      console.log('[build:code] No extension files found. Copied source as-is.');
      console.log(`[build:code] Finished in ${Date.now() - start}ms`);
      return;
    }

    const results: ExtensionFileProcessResult[] = [];

    for (const extensionFileAbs of extensionFiles) {
      results.push(await this.processExtensionFile(extensionFileAbs));
    }

    await this.removeBuildExtensionFiles(results);

    console.log(`[build:code] Completed successfully in ${Date.now() - start}ms`);
  }

  private printConfig(): void {
    console.log('[build:code] Starting build source generation with config:');
    console.log(`  srcRoot            = ${this.config.srcRoot}`);
    console.log(`  businessRoot       = ${this.config.businessRoot}`);
    console.log(`  sharedRoot         = ${this.config.sharedRoot}`);
    console.log(`  buildSrcRoot       = ${this.config.buildSrcRoot}`);
    console.log(`  extensionFileName  = ${this.config.extensionFileName}`);
    console.log(`  classSuffix        = ${this.config.classSuffix}`);
  }

  private async prepareBuildSource(): Promise<void> {
    const srcRootAbs = this.abs(this.config.srcRoot);
    const buildSrcRootAbs = this.abs(this.config.buildSrcRoot);

    await fs.remove(buildSrcRootAbs);
    await fs.copy(srcRootAbs, buildSrcRootAbs);

    console.log(`[build:code] Copied ${this.config.srcRoot} -> ${this.config.buildSrcRoot}`);
  }

  private async findExtensionFiles(): Promise<string[]> {
    const businessRootAbs = this.abs(this.config.businessRoot);

    const pattern = `**/${this.config.extensionFileName}`;

    const files = await fg(pattern, {
      cwd: businessRootAbs,
      absolute: true,
      onlyFiles: true,
    });

    console.log(`[build:code] Found ${files.length} extension file(s)`);
    return files;
  }

  private async processExtensionFile(extensionFileAbs: string): Promise<ExtensionFileProcessResult> {
    const relative = path.relative(this.rootDir, extensionFileAbs);
    console.log(`[build:code] Processing ${relative}`);

    const fileText = await fs.readFile(extensionFileAbs, 'utf8');
    const isEmpty = fileText.trim().length === 0;

    const sourceFile = this.project.addSourceFileAtPath(extensionFileAbs);

    const importMap = this.buildImportMap(sourceFile.getImportDeclarations());

    const extensionClasses = sourceFile
      .getClasses()
      .filter((cls) => cls.isExported() && cls.getName()?.endsWith(this.config.classSuffix));

    if (extensionClasses.length === 0) {
      if (isEmpty) {
        console.log('  [skip] Empty extension file');
      } else {
        console.log(`  [skip] No exported classes ending with "${this.config.classSuffix}"`);
        console.log('  [keep] Keeping extension file in build output (non-empty)');
      }
      return { extensionFileAbs, hasMergeableClasses: false, isEmpty };
    }

    for (const extensionClass of extensionClasses) {
      await this.processExtensionClass(sourceFile.getFilePath(), extensionClass, importMap);
    }

    return { extensionFileAbs, hasMergeableClasses: true, isEmpty };
  }

  private buildImportMap(importDeclarations: ImportDeclaration[]): Map<string, string> {
    const map = new Map<string, string>();

    for (const decl of importDeclarations) {
      const moduleSpecifier = decl.getModuleSpecifierValue();

      for (const namedImport of decl.getNamedImports()) {
        const importName = namedImport.getName();
        const aliasNode = namedImport.getAliasNode();

        if (aliasNode) {
          const aliasName = aliasNode.getText();
          throw new Error(
            `[build:code] Aliased imports are not allowed in extension files. ` +
              `Found "${importName} as ${aliasName}" in ${decl.getSourceFile().getFilePath()}`,
          );
        }

        map.set(importName, moduleSpecifier);
      }
    }

    return map;
  }

  private async processExtensionClass(
    extensionFileAbs: string,
    extensionClass: ClassDeclaration,
    importMap: Map<string, string>,
  ): Promise<void> {
    const extensionClassName = extensionClass.getName();

    if (!extensionClassName) {
      throw new Error(`[build:code] Anonymous class found in ${extensionFileAbs}`);
    }

    const targetBaseName = this.getTargetBaseName(extensionClassName);

    const targetInfo = this.resolveTargetInfo(extensionFileAbs, targetBaseName, importMap);

    const targetBuildFileAbs = this.mapSrcPathToBuildSrcPath(targetInfo.resolvedImportAbsPath);

    if (!(await fs.pathExists(targetBuildFileAbs))) {
      throw new Error(
        `[build:code] Target build file does not exist: ${this.rel(targetBuildFileAbs)} ` +
          `(source target: ${this.rel(targetInfo.resolvedImportAbsPath)})`,
      );
    }

    const targetSourceFile = this.project.addSourceFileAtPathIfExists(targetBuildFileAbs);
    if (!targetSourceFile) {
      throw new Error(`[build:code] Could not open target build file ${this.rel(targetBuildFileAbs)}`);
    }

    const targetClass = targetSourceFile.getClass(targetInfo.className);
    if (!targetClass) {
      throw new Error(
        `[build:code] Target class ${targetInfo.className} not found in ${this.rel(targetBuildFileAbs)}`,
      );
    }

    console.log(
      `  [merge] ${extensionClassName} -> ${targetInfo.className} (${this.rel(targetBuildFileAbs)})`,
    );

    await this.mergeClassProperties({
      extensionFileAbs,
      extensionClass,
      targetBuildFileAbs,
      targetSourceFile,
      targetClass,
    });

    await targetSourceFile.save();
  }

  private getTargetBaseName(extensionClassName: string): string {
    if (!extensionClassName.endsWith(this.config.classSuffix)) {
      throw new Error(
        `[build:code] Class ${extensionClassName} does not end with suffix "${this.config.classSuffix}"`,
      );
    }

    const baseName = extensionClassName.slice(0, -this.config.classSuffix.length);

    if (!baseName) {
      throw new Error(
        `[build:code] Invalid extension class name ${extensionClassName}. Base name is empty.`,
      );
    }

    return baseName;
  }

  private resolveTargetInfo(
    extensionFileAbs: string,
    targetBaseName: string,
    importMap: Map<string, string>,
  ): TargetInfo {
    const importPath = importMap.get(targetBaseName);

    if (!importPath) {
      throw new Error(
        `[build:code] ${targetBaseName}${this.config.classSuffix} found but ${targetBaseName} import missing in ${this.rel(
          extensionFileAbs,
        )}`,
      );
    }

    const resolvedImportAbsPath = this.resolveImportToTsFile(extensionFileAbs, importPath);

    const sharedRootAbs = this.abs(this.config.sharedRoot);
    const normalizedResolved = this.normalizePath(resolvedImportAbsPath);
    const normalizedSharedRoot = this.normalizePath(sharedRootAbs);

    if (!normalizedResolved.startsWith(normalizedSharedRoot + '/')) {
      throw new Error(
        `[build:code] Imported target ${targetBaseName} does not resolve inside shared root. ` +
          `Resolved to ${this.rel(resolvedImportAbsPath)}, expected under ${this.config.sharedRoot}`,
      );
    }

    return {
      className: targetBaseName,
      importPath,
      resolvedImportAbsPath,
    };
  }

  private async mergeClassProperties(params: {
    extensionFileAbs: string;
    extensionClass: ClassDeclaration;
    targetBuildFileAbs: string;
    targetSourceFile: ReturnType<Project['addSourceFileAtPath']>;
    targetClass: ClassDeclaration;
  }): Promise<void> {
    const { extensionFileAbs, extensionClass, targetBuildFileAbs, targetSourceFile, targetClass } = params;

    const extensionProperties = extensionClass.getProperties();

    for (const prop of extensionProperties) {
      const propName = prop.getName();

      if (!propName) {
        throw new Error(`[build:code] Found invalid property in ${this.rel(extensionFileAbs)}`);
      }

      const existingProp = targetClass.getProperty(propName);
      if (existingProp) {
        if (this.config.failOnDuplicateProperty) {
          throw new Error(
            `[build:code] Duplicate property "${propName}" already exists in target class ` +
              `${targetClass.getName()} at ${this.rel(targetBuildFileAbs)}`,
          );
        }
        continue;
      }

      const typeNode = prop.getTypeNode();
      if (!typeNode) {
        throw new Error(
          `[build:code] Property "${propName}" in ${this.rel(extensionFileAbs)} must have an explicit type`,
        );
      }

      const typeText = typeNode.getText();

      this.copyNeededImportsForType({
        extensionFileAbs,
        extensionSourceFile: extensionClass.getSourceFile(),
        targetSourceFile,
        typeText,
      });

      /*targetClass.addProperty({
        name: propName,
        type: typeText,
        hasQuestionToken: prop.hasQuestionToken(),
        scope: Scope.Public,
      });*/
      
      let scope: Scope | undefined = undefined;

      if (prop.hasModifier(SyntaxKind.PublicKeyword)) {
        scope = Scope.Public;
      } else if (prop.hasModifier(SyntaxKind.ProtectedKeyword)) {
        scope = Scope.Protected;
      } else if (prop.hasModifier(SyntaxKind.PrivateKeyword)) {
        scope = Scope.Private;
      }

      const insertedProp = targetClass.addProperty({
        name: propName,
        type: typeText,
        hasQuestionToken: prop.hasQuestionToken(),
        isReadonly: prop.isReadonly(),
        isStatic: prop.isStatic(),
        scope,
      });

      insertedProp.setHasDeclareKeyword(prop.hasDeclareKeyword());

      console.log(`    [+] ${propName}: ${typeText}`);
    }
  }
  private isUnderSrcRoot(absPath: string): boolean {
    const srcRootAbs = this.normalizePath(this.abs(this.config.srcRoot));
    const normalized = this.normalizePath(absPath);
    return normalized === srcRootAbs || normalized.startsWith(srcRootAbs + '/');
  }
  private copyNeededImportsForType(params: {
    extensionFileAbs: string;
    extensionSourceFile: ReturnType<ClassDeclaration['getSourceFile']>;
    targetSourceFile: ReturnType<Project['addSourceFileAtPath']>;
    typeText: string;
  }): void {
    const { extensionFileAbs, extensionSourceFile, targetSourceFile, typeText } = params;

    const identifiers = this.extractTypeIdentifiers(typeText);

    if (identifiers.length === 0) return;

    const extensionImports = extensionSourceFile.getImportDeclarations();

    for (const identifier of identifiers) {
      const matchingImport = extensionImports.find((decl:any) =>
        decl.getNamedImports().some((ni:any) => ni.getName() === identifier && !ni.getAliasNode()),
      );

      if (!matchingImport) {
        continue;
      }

      const sourceModuleSpecifier = matchingImport.getModuleSpecifierValue();
      let sourceImportedFileAbs = this.resolveImportToTsFile(extensionFileAbs, sourceModuleSpecifier);

      // IMPORTANT:
      // if imported file is inside src/, remap it to the matching file inside .build/
      if (this.isUnderSrcRoot(sourceImportedFileAbs)) {
        sourceImportedFileAbs = this.mapSrcPathToBuildSrcPath(sourceImportedFileAbs);
      }

      const targetFileDir = path.dirname(targetSourceFile.getFilePath());
      const relativeModulePath = this.toModuleSpecifier(
        path.relative(targetFileDir, sourceImportedFileAbs).replace(/\.(ts|tsx|js|jsx)$/, ''),
      );

      const existingImportDecl = targetSourceFile
        .getImportDeclarations()
        .find((decl:any) => decl.getModuleSpecifierValue() === relativeModulePath);

      if (existingImportDecl) {
        const alreadyImported = existingImportDecl
          .getNamedImports()
          .some((ni:any) => ni.getName() === identifier && !ni.getAliasNode());

        if (!alreadyImported) {
          existingImportDecl.addNamedImport(identifier);
        }
      } else {
        targetSourceFile.addImportDeclaration({
          moduleSpecifier: relativeModulePath,
          namedImports: [identifier],
        });
      }
    }
  }

  private extractTypeIdentifiers(typeText: string): string[] {
    const builtins = new Set([
      'string',
      'number',
      'boolean',
      'Date',
      'Record',
      'Array',
      'Promise',
      'unknown',
      'any',
      'null',
      'undefined',
      'object',
      'bigint',
      'symbol',
      'void',
      'never',
      'readonly',
      'Partial',
      'Required',
      'Pick',
      'Omit',
      'Exclude',
      'Extract',
      'NonNullable',
    ]);

    const raw = typeText.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g) ?? [];
    const filtered = raw.filter((token) => !builtins.has(token));
    return [...new Set(filtered)];
  }

  private resolveImportToTsFile(fromFileAbs: string, moduleSpecifier: string): string {
    if (!moduleSpecifier.startsWith('.')) {
      throw new Error(
        `[build:code] Only relative imports are supported in extension files. ` +
          `Found "${moduleSpecifier}" in ${this.rel(fromFileAbs)}`,
      );
    }

    const fromDir = path.dirname(fromFileAbs);
    const candidateBase = path.resolve(fromDir, moduleSpecifier);

    const candidates = [
      candidateBase,
      `${candidateBase}.ts`,
      `${candidateBase}.tsx`,
      path.join(candidateBase, 'index.ts'),
      path.join(candidateBase, 'index.tsx'),
    ];

    for (const candidate of candidates) {
      if (fs.existsSync(candidate)) {
        return candidate;
      }
    }

    throw new Error(
      `[build:code] Could not resolve import "${moduleSpecifier}" from ${this.rel(fromFileAbs)}`,
    );
  }

  private mapSrcPathToBuildSrcPath(srcAbsPath: string): string {
    const srcRootAbs = this.abs(this.config.srcRoot);
    const buildSrcRootAbs = this.abs(this.config.buildSrcRoot);

    const relPath = path.relative(srcRootAbs, srcAbsPath);
    return path.join(buildSrcRootAbs, relPath);
  }

  private toModuleSpecifier(relPath: string): string {
    let normalized = relPath.replace(/\\/g, '/');
    if (!normalized.startsWith('.')) {
      normalized = `./${normalized}`;
    }
    return normalized;
  }

  private abs(p: string): string {
    return path.isAbsolute(p) ? p : path.join(this.rootDir, p);
  }

  private rel(p: string): string {
    return path.relative(this.rootDir, p).replace(/\\/g, '/');
  }

  private normalizePath(p: string): string {
    return p.replace(/\\/g, '/').replace(/\/+$/, '');
  }
  private async removeBuildExtensionFiles(results: ExtensionFileProcessResult[]): Promise<void> {
    const removedBuildFiles = new Set<string>();

    for (const result of results) {
      // Only remove files that are truly empty. Anything with content (including `export {}`)
      // must remain in `.build` so module exports like `export * from './shared'` don't break.
      const shouldRemove = result.isEmpty;
      if (!shouldRemove) continue;

      const buildExtensionFileAbs = this.mapSrcPathToBuildSrcPath(result.extensionFileAbs);

      if (await fs.pathExists(buildExtensionFileAbs)) {
        await fs.remove(buildExtensionFileAbs);
        removedBuildFiles.add(this.normalizePath(buildExtensionFileAbs));
        console.log(
          `[build:code] Removed empty file from build output: ${this.rel(buildExtensionFileAbs)}`,
        );
      }
    }

    if (removedBuildFiles.size > 0) {
      await this.removeReferencesToRemovedBuildFiles(removedBuildFiles);
    }
  }

  private getCandidateImportAbsPaths(fromFileAbs: string, moduleSpecifier: string): string[] {
    const fromDir = path.dirname(fromFileAbs);
    const candidateBase = path.resolve(fromDir, moduleSpecifier);

    return [
      candidateBase,
      `${candidateBase}.ts`,
      `${candidateBase}.tsx`,
      `${candidateBase}.js`,
      `${candidateBase}.jsx`,
      path.join(candidateBase, 'index.ts'),
      path.join(candidateBase, 'index.tsx'),
      path.join(candidateBase, 'index.js'),
      path.join(candidateBase, 'index.jsx'),
    ].map((p) => this.normalizePath(p));
  }

  private async removeReferencesToRemovedBuildFiles(removedBuildFiles: Set<string>): Promise<void> {
    const buildSrcRootAbs = this.abs(this.config.buildSrcRoot);

    const buildSourceFiles = await fg(['**/*.ts', '**/*.tsx'], {
      cwd: buildSrcRootAbs,
      absolute: true,
      onlyFiles: true,
      ignore: ['**/*.d.ts'],
    });

    let changedCount = 0;

    for (const buildFileAbs of buildSourceFiles) {
      const sourceFile = this.project.addSourceFileAtPathIfExists(buildFileAbs);
      if (!sourceFile) continue;

      let changed = false;

      for (const decl of sourceFile.getImportDeclarations()) {
        const spec = decl.getModuleSpecifierValue();
        if (!spec.startsWith('.')) continue;

        const candidates = this.getCandidateImportAbsPaths(buildFileAbs, spec);
        if (candidates.some((c) => removedBuildFiles.has(c))) {
          decl.remove();
          changed = true;
        }
      }

      for (const decl of sourceFile.getExportDeclarations()) {
        const spec = decl.getModuleSpecifierValue();
        if (!spec || !spec.startsWith('.')) continue;

        const candidates = this.getCandidateImportAbsPaths(buildFileAbs, spec);
        if (candidates.some((c) => removedBuildFiles.has(c))) {
          decl.remove();
          changed = true;
        }
      }

      if (changed) {
        await sourceFile.save();
        changedCount += 1;
      }
    }

    console.log(
      `[build:code] Updated ${changedCount} build file(s) to remove references to excluded files`,
    );
  }
}

async function main() {
  const generator = new BuildSourceRelationGenerator({
    // You can override defaults here later if needed.
    srcRoot: 'src',
    businessRoot: 'src/graphql/endpoints/business',
    sharedRoot: 'src/graphql/endpoints/shared',
    buildSrcRoot: '.build',
    extensionFileName: 'shared.ts',
    classSuffix: 'Shared',
    failOnDuplicateProperty: true,
  });

  await generator.run();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
