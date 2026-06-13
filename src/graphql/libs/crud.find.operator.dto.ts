export class FindOperatorDto {
  equal?: string;
  notEqual?: string;
  like?: string;
  notLike?: string;
  into?: string[];
  notInto?: string[];
  between?: string[];
  notBetween?: string[];
  lt?: string;
  lte?: string;
  mt?: string;
  mte?: string;
  nulls?: boolean;
  matchFun?: string;
}