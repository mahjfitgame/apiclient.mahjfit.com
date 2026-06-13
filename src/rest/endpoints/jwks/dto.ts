export class JwksDto {
  static metaname: string = 'Jwks';

  declare kty: string;
  declare n: string;
  declare e: string;
  declare kid: string;
  declare alg: string;
  declare use: string;
}

export class JwksOutputDto extends JwksDto {
  declare keys: JwksDto[];
}
