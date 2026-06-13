import { CrudSnapshotDto, CrudSnapshotSelectionSchema } from "./crud.snapshot.dto";

export class CrudAffectedDto extends CrudSnapshotDto {
    affected?: number = 0;
}
export class CrudAffectedSelectionSchema extends CrudSnapshotSelectionSchema {
  affected?: boolean = false;  
}

// ████████████████████