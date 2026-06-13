# Understand rest schema for bfw-api-sdk
Conver schema to module for SDK

Filename: swagger.json (located at root of project)

Reference ready to go modules are here
src/rest/endpoints/
You need to follow same code pattern as in above module and for fields match with 
swagger.json
as below and finish pixcel perfect module development as per give input.

### you need to understand Schema as below
module
end point url slug
method
url path input
post input
output


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
This Module Location:  src/graphql/endpoints
All module Location:  src/graphql/endpoints

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

7. Create module-folder/enum.ts
If you identify enum for specific module you need to create typescript enum like
export enum YesNoEnum {
  YES = 'YES',
  NO = 'NO',
}

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

12. Create module-folder/manual.md
to create manual you need to scan the sdk code base and understand how it works and once you understand the techncial process draft the manual. It has to be very perfect.
You need to create a guide for developer about features of this module and how it can be used. You need to mentiond clear expalnation with code snippet. Also shows all possible ways if multiple like for import, direct and Bundle-optimized imports etc. Look for these kind of info and include insside.
Use this structure for every endpoint module documentation:
  1. What this module provides
  2. Import and initialization
  3. Input DTOs
  4. Selection/filter/sort/pagination strategy
  5. Available methods
  6. Recommended flow(s)
  7. Presets/enums/constants
  8. Framework samples (Node, Nest, Angular, React, Vue, Vanilla JS)
  9. Error handling and retry notes
  10. FAQ/troubleshooting

  You MUST INCLUDE USAGE EXAMPLE CODE SNIPPINT in manual. Developers look for exact implementation code in manual. Manual must be in show in-depth information of module, intgration and best practices. 

---

# THUMB RULE:
Thumb rule is, if something is reqired but not belongs to working module then check whther it is from different module or from common artifact goes to libs.
If it's from differetn module, you need to create that targated module filder and create relvent file and add required content and reference it to main module. Do not developer that tragated module full, only required part.  If it's common artifact then create new file in libs and creare that reusabe artifact and reference it where it required.

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
Hint: make sure you exclue AbcdXyzKlm module which has same naming pattern.
This Module Location:  path/to/module
All module Location:  path/to/all/modules
Libs location: path/to/libs