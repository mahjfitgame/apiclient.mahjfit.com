# GraphQL Module Quality Check Instructions (Step-by-Step)

Use this guide when validating or generating a GraphQL SDK module from `schema.graphql`.

> Important: Run the process **one by one**. Do not combine all prompts in one request.

---

## Step 1: Module identification + first generation prompt

### Goal
Decide which module needs to  be created from the bfw-nestjs-microservice-api and run the first prompt from `schema-to-gql-modual.md`.

### Inputs to provide
- `This Module Location: path/to/module`
- `All module Location: path/to/all/modules`
- `Libs location: path/to/libs`

### Prompt to send (Prompt 1)
Use the instructions in `docs/prompt/schema-to-gql-modual.md` and provide:
1. Exact module name to generate.
2. Module location.
3. All modules location.
4. Libs location.
5. Any disambiguation hint when names overlap (example: `X` vs `XFile`).

### Foreign relation check
After generation, check every `fr_*` field and confirm it points to the correct DTO/entity/lib type.

Use these simple rules:
- A module inside `shared` can use `fr_*` relation only with another module inside `shared`.
- A module inside `shared` must **not** directly use `fr_*` relation to any module inside `business`.
- If `business` needs to connect with shared data, handle that relation in the business module layer (for example, business mapping/shared helper file) instead of creating direct `shared -> business` `fr_*` relation.

If any foreign relation is missing, wrong, or cross-boundary, send a **second follow-up prompt** only for foreign-relation fixes.

---

## Step 2: DTO find-comment block check

### Goal
Ensure every DTO file contains the find marker comment blocks.

### Required comment block
```ts
/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
 **/
// ████ FIND INPUT DTO ████████████████████████████████████████████████
// ████ FIND OUTPUT DTO ████████████████████████████████████████████████
```

### Prompt to send if missing
Use `docs/prompt/dto-comment.md` exactly for the module currently under review.

---

## Step 3: Documentation comments audit (DTO + Entity + SelectionSchema + Service)

### Goal
Ensure comments exist everywhere needed for developer-facing documentation.

### Required checks
1. **DTO classes**
   - Main DTO classes must have method-level description comments derived from `schema.graphql`.
   - Field-level comments must be taken from schema field descriptions only.
2. **Entity classes**
   - Field-level comments should align with schema comments.
3. **Selection schema artifacts**
   - Ensure field comments exist where applicable.
4. **Service methods**
   - Every service method must have an action-level JSDoc comment based on schema operation comment text.

### Prompt to send if any comments are missing
Use `docs/prompt/comment-for-documentation.md`.

### Important note for `comment-for-documentation.md`
This prompt file covers **multiple comment responsibilities**. Treat and verify them separately:
1. **Field comments**
   - Every field in DTO/entity/selection schema should use schema-based field comments.
2. **Main DTO class comments**
   - Every main action DTO class must have class-level comment text from schema operation descriptions.
3. **Service method action comments**
   - Every method in service file must have action-level JSDoc comment derived from schema operation docs.

When raising a follow-up prompt, clearly mention which of the three categories is missing (one, two, or all three).

---

## Execution order (strict)
For each module, follow this order only:
1. Run Prompt 1 (`schema-to-gql-modual.md`) for module creation/validation.
2. Validate foreign relations; if broken, send Prompt 2 for relation fixes.
3. Verify DTO find-comment block; if missing, send DTO comment prompt (`dto-comment.md`).
4. Run full documentation comment audit; if missing, send documentation prompt (`comment-for-documentation.md`).

Process modules one by one and complete all four checks before moving to the next module.

---

## Definition of Done (per module)
A module is complete only if all are true:
- Module artifacts are generated in the correct folder.
- `fr_*` relations are valid and resolved.
- DTO find-comment block exists.
- DTO/entity/selection schema field comments exist and are schema-accurate.
- Main DTO class comments exist.
- Every service method has action comment JSDoc.
