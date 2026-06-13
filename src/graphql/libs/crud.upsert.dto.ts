import { UpsertStatusEnum } from "./crud.enum";

export class UpsertOutputProcessStatusDto {
    upsert_process?: UpsertStatusEnum = UpsertStatusEnum.UNDEFINED;
}

export class UpsertOutputProcessStatusSelectionSchema {
  upsert_process?: boolean = false;
}
// ████████████████████