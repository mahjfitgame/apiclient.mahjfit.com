import { CrudAffectedDto, CrudAffectedSelectionSchema } from "./crud.affected.dto";
export class MarkAsMainInputDto {
    id!: string;
    ref_group_relation_field_value!: string;
}

// ████████████████████

export class MarkAsMainOutputDto extends CrudAffectedDto {
    id?: string;
    ref_group_relation_field_value?: string;
}
export class MarkAsMainOutputSelectionSchema extends CrudAffectedSelectionSchema {
    id?: boolean;
    ref_group_relation_field_value?: boolean = false;
}
// ████████████████████