export class SnapshotListDto {
  message?: string[];
  result?: string[];
  imp?: string[];
  mismatch?: string[];
  notFound?: string[];
  conflict?: string[];
  success?: string[];
  error?: string[];
  alert?: string[];
  warning?: string[];
  notice?: string[];
  info?: string[];
}
export class SnapshotListSelectionSchema {
  message?: boolean = false;
  result?: boolean = false;
  imp?: boolean = false;
  mismatch?: boolean = false;
  notFound?: boolean = false;
  conflict?: boolean = false;
  success?: boolean = false;
  error?: boolean = false;
  alert?: boolean = false;
  warning?: boolean = false;
  notice?: boolean = false;
  info?: boolean = false;
}
// ████████████████████

export class CrudSnapshotDto {
    snapshot?: SnapshotListDto;
}
export class CrudSnapshotSelectionSchema {
    snapshot?: typeof SnapshotListSelectionSchema | SnapshotListSelectionSchema | false = SnapshotListSelectionSchema;
}

// ████████████████████