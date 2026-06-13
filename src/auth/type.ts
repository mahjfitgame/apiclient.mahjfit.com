import { JwtTokenPair } from "../utility";

export interface AuthApiLikeObj {
  jwt_access_token: string; 
  jwt_refresh_token: string
}
export interface AuthApiLike {
  refresh(jwtRefreshToken: string): Promise<AuthApiLikeObj>;
}
export interface InitializeTokensType {
  source: 'persistent' | 'bootstrap'; 
  tokens: JwtTokenPair
}