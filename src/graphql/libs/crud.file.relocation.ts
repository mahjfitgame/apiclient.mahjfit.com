import { FileRelocationTypeEnum } from "./crud.enum";
import { UploadOutputDtoWithAffectedDto, UploadOutputDtoWithAffectedDtoSelectionSchema } from "./crud.upload.input.dto";
export class FileRelocationInputDto {
    // Source id or reference id must be provided to process file relocation
    source_id!: string;
    
    //Destination id or reference id must be provided to process file relocation
    destination_id?: string;

    // Source record refrence id of file
    source_ref_id?: string;

    // Destination record refrence id of file
    destination_ref_id?: string;

    // File relocation type.
    relocation_type!: FileRelocationTypeEnum;
}
// ████████████████████
export class FileRelocationOutputDto extends UploadOutputDtoWithAffectedDto {
    relocation_type?: FileRelocationTypeEnum;
}
export class FileRelocationOutputSelectionSchema extends UploadOutputDtoWithAffectedDtoSelectionSchema {
    relocation_type?: boolean = false;
}