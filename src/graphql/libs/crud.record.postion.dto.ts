import { CrudAffectedDto, CrudAffectedSelectionSchema } from "./crud.affected.dto";

export class RecordPositionInputDto {
    from_record_id!: string;
    from_record_position_id!: string;
    to_record_id!: string;
    to_record_position_id!: string;
}

// ████████████████████

export class RecordPositionOutputDto extends CrudAffectedDto {
    id?: string;
}
export class RecordPositionOutputSelectionSchema extends CrudAffectedSelectionSchema {
    id?: boolean = false;
}

// ████████████████████