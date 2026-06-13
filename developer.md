# Very important

This package requird API schema. For this SDK there are 2 schema

1. GraphQL: schema.graphql
2. REST: swagger.json

Both needs to be iin latest stage, and keep it updated is manual process.
You need to go to API playground and follow below process to get these schemas.

GraphQL

1. Go to GraphQL Playground such as: http://localhost:20147/graphql
2. On LEft side find "Schema" menu icon
3. From sub menu, click "Schema defination"
4. From right side there a download button called "Raw", click and schema will be download
5. Make sure you keep the file name same as "schema.graphql" and place at the root of this project

REST

1. Go to Swager Playground such as: http://localhost:20152/swagger
2. Change the URL to: http://localhost:20152/swagger-json
3. Open new URL and you will have full schema
4. Copy the whole and create new file and paste
5. Make sure you keep the file name same as "swagger.json" and place at the root of this project

# Create package

```
npm run build
npm pack
```

It will create .tgz file at root
We use "tsup" to building process, why? I am not sure. I tried to understand the concept but had no time to complete it.

# What to include in package

You need to contron it from package.json "files".
It will include listed files, remain will be excluded.

# Mantain version

When you build and pack you need to make sure that you update the version, so users don't get stuck

# Install from bfw-api-sdk-1.0.0.tgz

To perform test you can install package in your project as below.

1. Get package .tgz file and place on your project root
2. run below command in your terminal

```
npm i bfw-api-sdk-1.0.0.tgz
```

3. Verify it installed

```
npm ls @bfw/api-sdk
```

4. Remove
   If you want to reinstall cleanly

```
npm uninstall @bfw/api-sdk

npm rm @bfw/api-sdk
```

# Perform trial

There is a file at root

```
trial.mjs
```

You can write any test case and run the file to see output. Run as below.

```
node trial.mjs
```

# Create new grapql module using AI prompt (codex)

```
include all content from file
docs/schema-to-gql-modual.md

---

As explained above create new module:

Module: [MODULE_NAME]
Hint: You will find many fr_* and those are reference to aothe module, so we need to create the full module but for quick turn abrond of this module you can just create small part whatever is required, not full module implementation. Later we will developer that new module. So, bascly all modules are related with each other and its kind  of round. 1 depends on 2 and 2 depends on 1. So, we will do it step by step.  Like if you need other module Entity class, just create it emptry class so we can atleast refernce that in current developing module, so later we just need to setup fields in that dependent module in in this module we don't have to rework reference is already set. So, this is how we need to work. Creating artifact of dependent module required to follow the same instruction for file and folder creations and namining pattern.

This Module Location:  src/graphql/endpoints/shared
All module Location:  src/graphql/endpoints/shared
Libs location: src/graphql/libs
```

# Update graphql module using AI prompt (codex)

```
there are some updates for module [YOUR_MODULE_NAME] in
src/graphql/endpoints/**/[YOUR_MODULE_NAME]

check schema file loacated at
schema.graphql
and updrade the module
Underdtand the codebase and schema, if needed you can refeer similar module [SIMILAR_REFERENCE_MODULE_PATH]

make sure you mantain the code standards of graphql modules in
src/graphql/endpoints
```

# Create new rest module using AI prompt (codex)

```
Develop new rest modules: NEAME_OF_YOUR_MODULE
need to developer rest API sdk module based on schema file
swagger.json
located at root.

Refere existing code base in folder
src/rest/endpoints

and follow same codebase pattern like modular code, file folder naminig, coding style etc.
module must match with schema in
"swagger.json"

There is a library
src/rest/libs
where common artifact stays. You can reuse any or if you found nay common you can create those there.

[APPY IF]
there is a difference:
These modules are child module of
src/rest/endpoints/web-scraper
so create it's folder inside
[ENDIF]

in case of url.slug, if some part is common with other module then import it's slug and use it.
This help to maina the code when URL pattern change
such as /wscr/ is used multiple place and origin is web-scraper modules's url.slug.ts
```

# Update rest module using AI prompt (codex)

```
there are some updates for module [YOUR_MODULE_NAME] in
src/rest/endpoints/[YOUR_MODULE_NAME]
check open api specification in file
swagger.json
located at root and updrade the module

make sure you mantain the code standards of rest modules in
src/rest/endpoints
```

---

NOT IN USE FOR NOW

12. Create module-folder/manual.md
    to create manual you need to scan the sdk code base and understand how it works and once you understand the techncial process draft the manual. It has to be very perfect.
    You need to create a guide for developer about features of this module and how it can be used. You need to mentiond clear expalnation with code snippet. Also shows all possible ways if multiple like for import, direct and Bundle-optimized imports etc. Look for these kind of info and include insside.
    Use this structure for every endpoint module documentation:
1. What this module provides
1. Import and initialization
1. Input DTOs
1. Selection/filter/sort/pagination strategy
1. Available methods
1. Recommended flow(s)
1. Presets/enums/constants
1. Framework samples (Node, Nest, Angular, React, Vue, Vanilla JS)
1. Error handling and retry notes
1. FAQ/troubleshooting

You MUST INCLUDE USAGE EXAMPLE CODE SNIPPINT in manual. Developers look for exact implementation code in manual. Manual must be in show in-depth information of module, intgration and best practices.
  
# Build Code Generator for Shared Class Extension

## Goal

This project uses a pre-build code generator to allow business modules to extend shared classes **without modifying shared source files directly**.

This solves the problem where:

- `src/graphql/endpoints/shared/**` contains stable reusable modules
- `src/graphql/endpoints/business/**` contains optional project-specific modules
- removing a business module should **not** require editing shared modules
- final build output should still contain merged relation fields in shared classes

---

## Main Idea

Business modules can define a `shared.ts` file.

Inside that file, the module can declare extension classes with suffix `Shared`.

Example:

```ts
import { AlertDurationService } from '../../shared/alert-type/alert-type.service';
import { UserSaveSearchService } from './user-save-search.service';

export class AlertDurationServiceShared {
  fr_user_save_search?: UserSaveSearchService[];
}