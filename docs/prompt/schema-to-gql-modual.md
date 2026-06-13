# first prompt
# Understand graphql schema for bfw-api-sdk
Conver schema to module for SDK

Filename: schema.graphql (located at root of project)

Reference ready to go modules are here
src/graphql/endpoints/shared/api-endpoint-auth
You need to follow same code pattern as in above module and for fields match with 
schema.graphql 
as below and finish pixcel perfect module development as per give input.

### There are following SchemaTypes
input
type
enum
scalar

### Now there are 2 types of Schema (this is as per use case)
1. Enpoint schema
2. Library based schema

The difference is, 
Endpoint schema are features such as user, session, user_personal_info, business etc.

Library based schema are those which are used inside endpoint schema. Means those are reusable. In some cases you will identify the library schema from file and in some cases we need to understand the usage pattern in endpoint schema and need to define library schema so it can be resued and we can avoid code duplication.

---

# Understand MODULE.
As mentioned modules are endpoint schema. In schema you need to look for pattern. There are few pattern to identify specific module. You need to foucus on naming pattern which is camel case based and you can identify the specific things as below.

### Identify Module Entity
[ModuleName][Entity]
in case of entity module name is prefixed with keyword "Entity"

### Identify Module Dto
[ModuleName][Action][Input/Output][SubAction(might be absent)][Dto]
All dto follow this naminig pattern. There are some variation but all are prefixed with keyword "Dto"

### Identify Module Enpoint Action
[ModuleName][Action]
Now all possible action names are as below. So, check prefix is belowns to any of below.
Upload
UploadDelete
Create
Update
SoftDelete
Delete
Restore
Upsert
SoftRemove
Remove
Recover
FileRelocation
Find
FindOneById
MarkAsMain
RecordPosition
Import
Export
AutoSuggestion

### Identify Module Enum
[ModuleName][some meaning full keywords ][Enum]
in case of enum module name with some meaning full keywords is prefixed with keyword "Enum"

### Identify Module Scalar
[ModuleName][some meaning full keywords ][Scalar]
in case of scalar module name with some meaning full keywords is prefixed with keyword "Scalar".

---

# Here are some example naming patter
Module Entity:
ApiEndpointAuthFileEntity

Module Dto:
ApiEndpointAuthFileCreateInputDto
ApiEndpointAuthFileCreateOutputDto

ApiEndpointAuthFileFindInputGroupByDto
ApiEndpointAuthFileFindInputSortOrderDto
ApiEndpointAuthFileFindInputWhereDto
ApiEndpointAuthFileFindInputDto
ApiEndpointAuthFileFindOutputDto
ApiEndpointAuthFileFindOneByIdInputDto

ApiEndpointAuthFileUpdateInputDto
ApiEndpointAuthFileUpdateInputSetsDto
ApiEndpointAuthFileUpdateInputWhereDto
ApiEndpointAuthFileUpdateOutputDto

ApiEndpointAuthFileDeleteInputDto
ApiEndpointAuthFileDeleteInputWhereDto
ApiEndpointAuthFileDeleteOutputDto

ApiEndpointAuthFileRecoverInputDto
ApiEndpointAuthFileRecoverInputWhereDto
ApiEndpointAuthFileRecoverOutputDto

ApiEndpointAuthFileRemoveInputDto
ApiEndpointAuthFileRemoveInputWhereDto
ApiEndpointAuthFileRemoveOutputDto

ApiEndpointAuthFileRestoreInputDto
ApiEndpointAuthFileRestoreInputWhereDto
ApiEndpointAuthFileRestoreOutputDto

ApiEndpointAuthFileSoftDeleteInputDto
ApiEndpointAuthFileSoftDeleteInputWhereDto
ApiEndpointAuthFileSoftDeleteOutputDto

ApiEndpointAuthFileSoftRemoveInputDto
ApiEndpointAuthFileSoftRemoveInputWhereDto
ApiEndpointAuthFileSoftRemoveOutputDto

ApiEndpointAuthFileUploadInputDto
ApiEndpointAuthFileUploadOutputDto
ApiEndpointAuthFileUpsertInputDto
ApiEndpointAuthFileUpsertOutputDto

ApiEndpointAuthFileUploadDeleteInputDto
ApiEndpointAuthFileUploadDeleteOutputDto

ApiEndpointAuthFileFileRelocationInputDto
ApiEndpointAuthFileFileRelocationOutputDto

there are more also but pattern stay same, action will change and some words. Such as
*MarkAsMainInput
*MarkAsMainOutput
*RecordPosition

Module Actions:
ApiEndpointAuthFileCreate
ApiEndpointAuthFileFind
ApiEndpointAuthFileFindOneById
ApiEndpointAuthFileUpdate
ApiEndpointAuthFileSoftDelete
ApiEndpointAuthFileDelete
ApiEndpointAuthFileRestore
ApiEndpointAuthFileSoftRemove
ApiEndpointAuthFileRemove
ApiEndpointAuthFileRecover
ApiEndpointAuthFileUpsert
ApiEndpointAuthFileUpload
ApiEndpointAuthFileUploadDelete
ApiEndpointAuthFileFileRelocation

some other such 
*MarkAsMain
*RecordPosition

Module Enum:
ApiEndpointAuthFileUploadFileFieldEnum

---

# Fields in schema
Now from all SchemaTypes, input and type have fields.
Enums are kind of value as objects.

In case of input and type you need to focus on below
1. Field name
Namiing pattern: if field name start with "fr_" means its data type is another module's input ot type that can be Entity or Dto etc. That means field with fr_ are recursive.

2. Data type
Data type required to choose data type of class filed during schema to class creation job.

3. Required or Optional
Optional fields: if field is marked with ! (exclamatory sign) it's optional otherwise its required.

---

# How to convert schema to SDK module.

1. Identify the module name. Genereally it will be given to you. so, its easy to match with naming pattern. Such as "ApiEndPointAuth"
This is little tricky. Ther emight be module called "ApiEndPointAuthFile" and if you match the starting words you wil get wrong or annonying data.
In that scnario you will be given some hint to exactly identity module from schema.
Sample input:
Module: ApiEndPointAuth
Hint: make sure you exclue ApiEndPointAuthFile module which has same naming pattern.

2. Identify all artifacts of module from schema.

3. once all identified you need to start creating module by creating folder and file at given location. You will be provided location to were to create new module.
Sample input:
This Module Location:  src/graphql/endpoints/**
All module Location:  src/graphql/endpoints/**

4. Create module folder.
You need to split all camel case words and join with - and convert to all lower case and create a folder with that name at given location.
Such as: ApiEndPointAuth becomes api-end-point-auth

5. Create module-folder/entity.ts
You need to create same name of entity class in this file. 
Here you need take all fileds with it's data type. In case of input schema you need to consider require and optional very precisely. In case of type schema all are optionlan.

Important consideration for fr_* fields.
If you entity has fr_* fields then you need to get what type it is and look for that module in all module location, if you not found it you can use any as a type for temporary purpose, later when you create that module you need to update it.

In some cases fr_* fields might be common artifact found in libs at 
src/graphql/libs

6. Create module-folder/dto.ts
From schema all input and type identify as DTO goes to dto.ts file.
Keep the class name same as schema and also fileds name and type. In case of fr_* fields check for data type and see what is posiible. 

MOST IMP is you need to add the comments as per any exisiting dto.ts file for referece module. So, comments in this file are important and the way it is commented in reference module dto.ts not what you thinnk. So, check reference, get idea and apply.

7. Create module-folder/enum.ts
If you identify enum for specific module you need to create typescript enum like
export enum YesNoEnum {
  YES = 'YES',
  NO = 'NO',
}

make sure your follow the inheritance and interface usege using implements exactly as per reference pattern. Do not change any patter for class inheritance.

8. Create module-folder/scalar.ts
If you identify scalar for specific module you need to create typescript type like
export type DateTime = string;
data type can be any or identify from scalar name.

9. Create module-folder/service.ts
Here you need to create api end point call making class.
Class name will be module name prefixed with keyword "Service"
Here you need to create class method of all idetified actions for that module.
like...
export class ApiEndpointAuthService any-entends-statement {
  public create(args: { 
    input: ApiEndpointAuthCreateInputDto[]; 
    selection: ApiEndpointAuthEntitySelection 
    }): <return-type-if-any> {
    //process goes here
    return what is possible
  }
  // same way for all action found in schema
}

10. Create module-folder/type.ts
If you need extra types you can creat this file and add required code

11. Create module-folder/index.ts
Once done module creation you need to add export or import at relevent place might be in index.ts.
Also update package.json, tsup.config.ts or any other place where we need to import this module for developer access.

12. 
Check if any updated required in below fiels for this new module
src/graphql/endpoints/shared/domain.ts
src/graphql/endpoints/shared/factory.ts
src/graphql/endpoints/business/domain.ts
src/graphql/endpoints/business/factory.ts


---

# THUMB RULE:
Thumb rule is, if something is reqired but not belongs to working module then check whther it is from different module or from common artifact goes to libs.
If it's from differetn module, you need to create that targated module filder and create relvent file and add required content and reference it to main module. Do not developer that tragated module full, only required part.  If it's common artifact then create new file in libs and creare that reusabe artifact and reference it where it required.
Already developed modules are available at below location
src/graphql/endpoints/business/**
src/graphql/endpoints/shared/**
It is possible that there are folders inside and it has more then one modules, so you need to consider it.

# Foreign relation
it is very important. if You will find many fr_* and those are reference to aothe module, so we need to create the full module but for quick turn abrond of this module you can just create small part whatever is required, not full module implementation. Later we will developer that new module. So, bascly all modules are related with each other and its kind  of round. 1 depends on 2 and 2 depends on 1. So, we will do it step by step.  Like if you need other module Entity class, just create it emptry class so we can atleast refernce that in current developing module, so later we just need to setup fields in that dependent module in in this module we don't have to rework reference is already set. So, this is how we need to work. Creating artifact of dependent module required to follow the same instruction for file and folder creations and namining pattern.

IMPORTANT POINT ABOUT SETTING RELATIONS:
In schema you will find two way relations means schema_a has relation with schema_b and schema_b has relation with schema_a. Now, in programing code this relations needs to be mantained slightly differenttly.
In code you will see 2 different code 
src/graphql/endpoints/shared
src/graphql/endpoints/business
Now, any schema belongs to [business] needs to be mantained slightly differently as [business] has on-demand functionalities and [shared] are permenant features and functionality.
Now, rule is any modules in [shared] folder cannot add fr_* relation to those modules which is in [business]. Means all [shared] modules can set relation in between each other using fr_* but not with module sinside [busines].
Now, in [business] its different. Business modules can set all relations internal and also all in shared + business modules also need to add shred module relation required for self module and that is [shared.ts]  files. So, required relations which shared module should have with business modules needs to be defined in business module it self.
This is to keep the code highely mantainable and taking advantage of build time process.
When build will happen and you chan check the 
package.json and also 
scripts/generate-build-src.ts
that will add the fr_* relations in shred modules automaticly iin generated class and what we are setting in shared.ts in business modules is insructions that can be followed at build time.
Reference modules is 
src/graphql/endpoints/business/rets/user-saved-search
required shared module to have relation with self (user-saved-search) are defined in shared.ts file and its also has 
not in use import which actualy used during build time to point exact shared module.
There is apattern to define class in shared.ts is *Shared prefix with Shared keyword.

So, if there is a relation between shared and business module. you need to created shared.ts file in business module. This way shared modules stays untouched and business modules can manage their relations.

SO IDEA IS TO TAKE ADVANTAGE OF BUILD TIME PROCESS AND IMPROVE CODE MANTAINABILITY

# Libs
Libs already has some files. If you find any artifact match with file name add those to that file or you can create new.
Some libs base enums in schema
FileRelocationTypeEnum
RecordSortDirectionEnum
UpsertStatusEnum
YesNoEnum

When you work for any module and if you find library you need to create it and sme way when you work you also need to check if resrces are already availabe in libs then use it in that module do not re create it.
---
# Sample input for start job

As explained above create new module:

Module: AbcdXyz
Hint: make sure you exclude AbcdXyzKlm module which has same naming pattern.
Hint[required]: it is very important. if You will find many fr_* and those are reference to aothe module, so we need to create the full module but for quick turn abrond of this module you can just create small part whatever is required, not full module implementation. Later we will developer that new module. So, bascly all modules are related with each other and its kind  of round. 1 depends on 2 and 2 depends on 1. So, we will do it step by step.  Like if you need other module Entity class, just create it emptry class so we can atleast refernce that in current developing module, so later we just need to setup fields in that dependent module in in this module we don't have to rework reference is already set. So, this is how we need to work. Creating artifact of dependent module required to follow the same instruction for file and folder creations and namining pattern.
Also, make sure you take refence properly and make the files accurate with pattern and everything
comments are very very IMPORTANT in dto file.
So, you must need to take care about codeing pattern style and how code is written. Do not change the code which required to be same.. it is very very importnat part. please not skipped anything.

This Module Location:  path/to/module
All module Location:  path/to/all/modules
Libs location: path/to/libs

# if you are createing business module then provide below line at first where we provided reference
# search "Reference ready to go modules are here" and after this line, add below
src/graphql/endpoints/business/rets/user-favourite-property
Also, you have reference of shared module.

----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------

# Second prompt
As above prompt is large, it is possible that it will not consider relation properly. So, we need to supply below prompt to fix it.

IMPORTANT: RELATION HANDLING RULES
You left few things.
You must follow these architectural rules exactly when generating GraphQL endpoint code.

1. SCHEMA RELATIONS VS CODE RELATIONS
In the database/schema layer, relations may exist in both directions.
Example:
- schema_a relates to schema_b
- schema_b relates to schema_a

However, in the programming/code layer, these relations must NOT always be implemented symmetrically.
Code relations must follow the module architecture rules below.

2. MODULE TYPES
There are two endpoint areas in the codebase:

- src/graphql/endpoints/shared
- src/graphql/endpoints/business

These two areas have different responsibilities:

- [shared] modules are permanent/core features
- [business] modules are on-demand/business-specific features

Because of this, relations must be implemented differently depending on which side owns the relation.

3. HARD RULE FOR SHARED MODULES
Modules inside [shared] may define fr_* relations only with other modules inside [shared].

A [shared] module must NEVER directly define fr_* relations to a module inside [business].

This is a strict rule.

4. RULE FOR BUSINESS MODULES
Modules inside [business]:
- may define internal relations with other [business] modules
- may define relations with [shared] modules
- must also define the reverse shared-side relation requirements for themselves when needed

This means:
If a relation exists between a [business] module and a [shared] module, the [shared] module must remain untouched.
Instead, the [business] module is responsible for declaring what shared-module relations are needed.

5. USE shared.ts IN BUSINESS MODULES
Whenever a relation exists between a [business] module and a [shared] module, you must create and maintain a shared.ts file inside the business module.

Purpose of shared.ts:
- it defines the relation instructions that the related shared modules should have toward this business module
- it allows the shared modules to stay untouched in source code
- it supports build-time generation of the final relation code

So:
- do NOT modify shared module source files directly for shared <-> business relations
- define those required shared-side relations inside the business module’s shared.ts file

6. BUILD-TIME GENERATION BEHAVIOR
This architecture exists to keep the codebase maintainable and to take advantage of the build-time process.

At build time:
- the build process reads the business module shared.ts definitions
- it automatically injects/generates the required fr_* relations into the appropriate shared generated classes

Relevant references:
- package.json
- scripts/generate-build-src.ts

So your generated source code must respect this pattern and must not bypass it.

7. REFERENCE EXAMPLE
Use this module as the reference pattern:
- src/graphql/endpoints/business/rets/user-saved-search

This module shows:
- how business modules declare required shared-module relations
- how shared.ts is structured
- how imports may appear unused in source but are actually required by the build process to identify the target shared module

8. NAMING PATTERN
In shared.ts, follow the existing naming convention exactly.

The class pattern uses:
- Shared prefix
- Shared suffix/keyword style already used in the codebase

Follow the same naming structure as the reference module.
Do not invent a new naming style.

9. GENERATION INSTRUCTION
When generating code, always apply this decision logic:

- If relation is between shared <-> shared:
  define fr_* normally in shared modules

- If relation is between business <-> business:
  define normally in business modules

- If relation is between business <-> shared:
  do NOT modify the shared module directly
  instead create/update shared.ts inside the business module
  and declare the required shared-side relation there

10. PRIMARY GOAL
The primary goal is:
- high maintainability
- strict separation between permanent shared code and on-demand business code
- correct use of build-time code generation

Never break this architecture for convenience.

11. You need to make sure that you only add [shared] relationed in shared.ts file.
If relation is from another business module then you need to apply that to class directly it will not come in shared.ts file. shared.ts file is exclusive for [shared] modules relation.