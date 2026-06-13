export class UploadFileAccessUrlDto {
  direct?: string | null;
  secure?: string | null;
  thumb?: string | null;
}

export class UploadFileAccessUrlSelectionSchema {
  direct?: boolean = false;
  secure?: boolean = false;
  thumb?: boolean = false;
}

// ████████████████████