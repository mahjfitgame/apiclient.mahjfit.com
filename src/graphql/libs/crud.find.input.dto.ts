import { FindInputPaginationOptionsDto } from "./crud.pagination.dto";
import { WithDeletedInputDto } from "./crud.with.deleted.dto";

export class FindInputDto<TWhere> extends WithDeletedInputDto {
  pagination?: FindInputPaginationOptionsDto;
  where?: TWhere[];
};
