import { RecordSortDirectionEnum, RecordSortNullPositionEnum } from "./crud.enum";

class SortOrderOption {
  direction?: RecordSortDirectionEnum;
  nulls?: RecordSortNullPositionEnum;
}