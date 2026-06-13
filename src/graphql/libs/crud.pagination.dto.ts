import { WithDeletedInputDto } from "./crud.with.deleted.dto";

export class FindOutputPage {
  page!: number;
  count!: number;
  skip!: number;
}
export class FindOutputPageSelectionSchema {
  page?: boolean = false;
  count?: boolean = false;
  skip?: boolean = false;
}

//SelectionSchema
// ████████████████████

export class FindOutputPaginationDto {
  first!: FindOutputPage;
  previous!: FindOutputPage;
  current!: FindOutputPage;
  next!: FindOutputPage;
  last!: FindOutputPage;
}
export class FindOutputPaginationSelectionSchema {
  first?: typeof FindOutputPageSelectionSchema | FindOutputPageSelectionSchema | false = FindOutputPageSelectionSchema;
  previous?: typeof FindOutputPageSelectionSchema | FindOutputPageSelectionSchema | false = FindOutputPageSelectionSchema;
  current?: typeof FindOutputPageSelectionSchema | FindOutputPageSelectionSchema | false = FindOutputPageSelectionSchema;
  next?: typeof FindOutputPageSelectionSchema | FindOutputPageSelectionSchema | false = FindOutputPageSelectionSchema;
  last?: typeof FindOutputPageSelectionSchema | FindOutputPageSelectionSchema | false = FindOutputPageSelectionSchema;
}

// ████████████████████
// if you chnage anythign you need to change in below and in FindInputPaginationOptionsDtoWithWithDeletedInputDto
export class FindInputPaginationOptionsDto extends WithDeletedInputDto {
    skip?: number = 0 as number;
    take?: number = 25;
}
// if you chnage anythign you need to change in below and in FindInputPaginationOptionsDto
export class FindInputPaginationOptionsDtoWithWithDeletedInputDto extends WithDeletedInputDto {
  skip?: number = 0 as number;
  take?: number = 25;
}

// ████████████████████

export class FindOutputPaginationOptionsDto {
    total?: number;
    remain?: number;
    pages?: number;
    take?: number = 25;
    pagination?: FindOutputPaginationDto;
}
export class FindOutputPaginationOptionsSelectionSchema {
    total?: boolean = false;
    remain?: boolean = false;
    pages?: boolean = false;
    take?: boolean = false;
    pagination?: typeof FindOutputPaginationSelectionSchema | FindOutputPaginationSelectionSchema | false = FindOutputPaginationSelectionSchema;
}
// ████████████████████