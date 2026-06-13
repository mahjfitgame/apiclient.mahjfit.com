import { CrudAffectedDto, CrudAffectedSelectionSchema } from "./crud.affected.dto";
import { UploadFileAccessUrlDto, UploadFileAccessUrlSelectionSchema } from "./crud.upload.file.access.url.dto";

export class UploadInputDto {
    // Please enter an reference id of record to link your upload file.
    ref_id!: string;

    // Please enter an id if you are uploading single file with external foreign relation entity.
    id?: string;
}

// ████████████████████

// if you chnage anythign you need to change in below and in UploadOutputDtoWithAffectedDto
export class UploadOutputDto {
    id?: string;
    ref_id?: string;
    file_name?: string;
    access_url?: UploadFileAccessUrlDto;
}
export class UploadOutputSelectionSchema {
  id?: boolean = false;
  ref_id?: boolean = false;
  file_name?: boolean = false;
  access_url?: typeof UploadFileAccessUrlSelectionSchema | UploadFileAccessUrlSelectionSchema | boolean = UploadFileAccessUrlSelectionSchema;
}

// ████████████████████

// if you chnage anythign you need to change in below and in UploadOutputDto
export class UploadOutputDtoWithAffectedDto extends CrudAffectedDto {
    id?: string;
    ref_id?: string;
    file_name?: string;
    access_url?: UploadFileAccessUrlDto;
}
export class UploadOutputDtoWithAffectedDtoSelectionSchema extends CrudAffectedSelectionSchema {
  id?: boolean = false;
  ref_id?: boolean = false;
  file_name?: boolean = false;
  access_url?: typeof UploadFileAccessUrlSelectionSchema | UploadFileAccessUrlSelectionSchema | boolean = UploadFileAccessUrlSelectionSchema;
}

// ████████████████████

export class UploadDeleteInputDto extends UploadInputDto {
    // Will be used when multiple files are uploaded, in his case when any specific file need to delete, pass the id of that record which has that file name. If your entity has single file upload and has external foreign relation in that id field is also required. For single file delete id is required and with foreign relation it's always required.
    declare id?: string;

    // When file delete is performed and file is inside a folder of record id and during delete, if all files are deleted, means folder is empty, then also remove record id folder. If set to true then it will also delete record id folder if it become empty after file delete.
    rmdir_record?: boolean;
}

// ████████████████████

export class UploadDeleteOutputDto extends CrudAffectedDto {
    id?: string;
    ref_id?: string;
}
export class UploadDeleteOutputSelectionSchema extends CrudAffectedSelectionSchema {
  id?: boolean = false;
  ref_id?: boolean = false;
}