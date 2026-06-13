
Role

You need to create and replicate the module for sdk and used schema,graphql

Reference mdoule is src/graphql/endpoints/shared/api-endpoint-auth

it has below files
dto.ts
entity.ts
enum.ts
index.ts
service.ts
type.ts


we can have other files as well
constants.ts
scalar.ts
utils.ts

create required files
All files have some meaning

you need to replicat excat strucure, code pattern evertying
DO not add any unwanted and unclear code
every arcitecture has some emaning.

Dto file
--------
create same as refence module ou just need to chang eas per the field in schema
all comments are very important
like
/**
 * █████████████████████████████████████████████████████████████
 * █ FIND DTO ██████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/
// ████ FIND OUTPUT DTO ████████████████████████████████████████████████

class level and field level comments are also importnat for documentation , so when sdk ill use frontend can get ideas  about class and filed for use when add code uisng vscode

So, do not skip anything in dto file


entity file
--------------

Entity is also very impportant. make it as per reference file. You just need to set entity field as per schema.
Here, comments are also very important
add in both class as per schema

Also, strtucure will be very clear,, do not add code in one line.. it is make the code very difficult to read,

DO not add any new pattern 

here fr_* reltion also very important

it is very important. if You will find many fr_* and those are reference to aothe module, so we need to create the full module but for quick turn abrond of this module you can just create small part whatever is required, not full module implementation. Later we will developer that new module. So, bascly all modules are related with each other and its kind  of round. 1 depends on 2 and 2 depends on 1. So, we will do it step by step.  Like if you need other module Entity class, just create it emptry class so we can atleast refernce that in current developing module, so later we just need to setup fields in that dependent module in in this module we don't have to rework reference is already set. So, this is how we need to work. Creating artifact of dependent module required to follow the same instruction for file and folder creations and namining pattern.
Also, make sure you take refence properly and make the files accurate with pattern and everything

now, for other files you need to create all files as per refrence file...

You must need to check schema properly to set foregin realtion, so, relation needs to be set as per schema. you can realtion reference from below
src/graphql/endpoints/shared/api-endpoint-auth/entity.ts
src/graphql/endpoints/shared/api-endpoint-auth-file/entity.ts


you must need to take care about codeing pattern style and how code is written. Do not change the code which required to be same.. it is very very important part. please not skipped anything.

Also you need to wirning this module
src/graphql/endpoints/shared/domain.ts
src/graphql/endpoints/shared/factory.ts
src/graphql/endpoints/shared/index.ts


# TARGET MODULE
{{MODULE_NAME}} = SettingTypeModule
Module:
`{{MODULE_NAME}}`

Module Location:
src/graphql/endpoints/shared/settings/type

All Module Location:
src/graphql/endpoints/shared/

Libs Location:
src/graphql/libs

Hint:
Before start to crate module analyse the existing refrence code adn then start to create one by one so, nothing will be missed...
Keep in mind You just need to add code which is related to 
{{MODULE_NAME}}
Just create module as per the {{MODULE_NAME}} schema.. Do not make any unwanted changes in unwanted files
Also, please make sure foreign key relationship is proper.







============================================================
============================================================
============================================================
============================================================
============================================================
============================================================
# ROLE

You are acting as a deterministic SDK code generator.

Your task is to convert GraphQL schema artifacts from `schema.graphql`
into SDK modules by following the existing project architecture EXACTLY.

The goal is:

* replicate architecture
* replicate code style
* replicate formatting
* replicate naming
* replicate imports/exports
* replicate service structure
* replicate DTO structure
* replicate entity structure

Do NOT invent new patterns.

---

# SOURCE FILES

Schema:
`schema.graphql`

Reference module:
`src/graphql/endpoints/shared/api-endpoint-auth`

You MUST follow the reference module EXACTLY.

IMPORTANT:
The reference module is the source of truth for:

* formatting
* spacing
* imports
* exports
* class structure
* service structure
* DTO structure
* selection schema structure
* module wiring

If there is conflict between instructions and reference module,
FOLLOW THE REFERENCE MODULE.

---

# STRICT MODULE FILTERING

Generate ONLY artifacts belonging EXACTLY to target module.

Example:

Target:
`ApiEndpointAuth`

Include:

* ApiEndpointAuthEntity
* ApiEndpointAuthCreateInputDto

Exclude:

* ApiEndpointAuthFileEntity
* ApiEndpointAuthFileUploadInputDto

Even if prefixes partially match.

---

# REQUIRED FILES

Generate ONLY these files:

* entity.ts
* dto.ts
* enum.ts
* scalar.ts
* service.ts
* type.ts
* shared.ts (if required)
* index.ts

Also generate required wiring updates for:

* src/graphql/endpoints/shared/domain.ts
* src/graphql/endpoints/shared/factory.ts
* src/graphql/endpoints/business/domain.ts
* src/graphql/endpoints/business/factory.ts
* src/graphql/endpoints/shared/index.ts

ONLY if required.

---

# FIELD RULES

Preserve EXACTLY:

* field names
* field types
* array types
* nullability
* comments
* relation naming

GraphQL Rules:

* `!` means REQUIRED
* no `!` means OPTIONAL

---

# fr_* RELATION RULES

Fields prefixed with:
`fr_`

represent relations.

You MUST:

* reuse existing artifacts if available
* create placeholder artifacts if missing
* preserve exact relation typing pattern from reference modules

Placeholder example:

```ts id="jlwm5m"
export class UserEntity {}
```

Do NOT fully implement dependent modules unless required.

---

# STRICT CODE STYLE RULES

This project uses handcrafted SDK formatting.

You MUST replicate formatting EXACTLY like reference modules.

---

# VERY IMPORTANT FORMATTING RULES

## ONE PROPERTY PER LINE

BAD:

```ts id="7dujlwm"
id?: number; name?: string;
```

GOOD:

```ts id="ggs8v0"
id?: number;

name?: string;
```

---

## NO DUPLICATE CLASSES

FORBIDDEN:

```ts id="g7x31o"
export class BusinessBranchSelectionSchema {}

export class BusinessBranchSelectionSchema {}
```

Only ONE class declaration per class name.

---

## NO EMPTY SELECTION SCHEMA

FORBIDDEN:

```ts id="1vw0a2"
export class BusinessBranchSelectionSchema {}
```

Selection schema MUST contain all fields.

---

## IMPORT FORMAT

Imports MUST be multiline.

BAD:

```ts id="f1y10s"
import { A,B,C } from 'x';
```

GOOD:

```ts id="2aaj0n"
import {
  A,
  B,
  C,
} from 'x';
```

---

## UNION FORMAT

Union types MUST be multiline.

BAD:

```ts id="plr0lu"
fr_user?: typeof UserSelectionSchema | UserSelectionSchema | false = UserSelectionSchema;
```

GOOD:

```ts id="8plxtq"
fr_user?:
  | typeof UserSelectionSchema
  | UserSelectionSchema
  | false = UserSelectionSchema;
```

---

## CLASS FORMAT

Preserve exact spacing and structure from reference module.

Do NOT compress:

* class bodies
* imports
* fields
* method arguments
* unions
* DTO fields

---

# DTO RULES

Comments are VERY IMPORTANT.

You MUST preserve:

* comment placement
* comment formatting
* comment spacing
* schema descriptions

Do NOT:

* rewrite comments
* generate AI comments
* remove comments

DTO formatting MUST visually match reference module exactly.

---

# SERVICE RULES

You MUST generate:
`service.ts`

Requirements:

* preserve exact request flow
* preserve exact method structure
* preserve exact typing pattern
* preserve exact formatting
* preserve multiline arguments

Do NOT:

* introduce axios
* introduce graphql-request
* modernize implementation
* invent abstractions

Follow reference module EXACTLY.

---

# MODULE WIRING RULES

You MUST generate required updates for:

* domain.ts
* factory.ts
* shared index exports

Preserve exact wiring pattern from existing modules.

---

# IMPORTANT

Do NOT:

* optimize
* refactor
* simplify
* modernize
* rename symbols
* merge files
* invent patterns
* compress formatting

Goal:
replicate existing architecture EXACTLY.

---

# FINAL VALIDATION

Before returning final output verify:

* all required files generated
* service.ts exists
* no duplicate classes
* no empty selection schema
* no compressed formatting
* no inline compressed unions
* no malformed imports
* no missing imports
* no missing exports
* no missing wiring updates
* formatting visually matches handcrafted SDK source

Generation is INVALID if formatting or structure differs from reference module.

---


# TARGET MODULE
{{MODULE_NAME}} = BusinessModule
Module:
`{{MODULE_NAME}}`

Module Location:
src/graphql/endpoints/shared/businesses/business

All Module Location:
src/graphql/endpoints/shared/

Libs Location:
src/graphql/endpoints/shared/

Hint:
it is very important. if You will find many fr_* and those are reference to aothe module, so we need to create the full module but for quick turn abrond of this module you can just create small part whatever is required, not full module implementation. Later we will developer that new module. So, bascly all modules are related with each other and its kind  of round. 1 depends on 2 and 2 depends on 1. So, we will do it step by step.  Like if you need other module Entity class, just create it emptry class so we can atleast refernce that in current developing module, so later we just need to setup fields in that dependent module in in this module we don't have to rework reference is already set. So, this is how we need to work. Creating artifact of dependent module required to follow the same instruction for file and folder creations and namining pattern.
Also, make sure you take refence properly and make the files accurate with pattern and everything
comments are very very IMPORTANT in dto file.
So, you must need to take care about codeing pattern style and how code is written. Do not change the code which required to be same.. it is very very importnat part. please not skipped anything.

------

# OUTPUT RULES

Return ONLY:

* production-ready source code

Do NOT return:

* explanations
* summaries
* markdown docs
* pseudo code

Generate complete implementation directly.

