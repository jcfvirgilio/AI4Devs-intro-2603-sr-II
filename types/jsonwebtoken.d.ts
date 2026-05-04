declare module "jsonwebtoken" {
  import { Secret, SignOptions, VerifyOptions } from "jsonwebtoken";

  export function sign(payload: string | Buffer | object, secret: Secret, options?: SignOptions): string;
  export function verify(token: string, secret: Secret, options?: VerifyOptions): string | object;
  export function decode(token: string, options?: VerifyOptions): null | { [key: string]: any } | string;

  export interface JwtPayload {
    [key: string]: any;
    iat?: number;
    exp?: number;
  }

  export type Secret = string | Buffer;
  export type SignOptions = {
    algorithm?: string;
    keyid?: string;
    noTimestamp?: boolean;
    encoding?: string;
    expiresIn?: string | number;
    notBefore?: string | number;
    audience?: string | string[];
    issuer?: string | string[];
    subject?: string;
    jwtid?: string;
    mutatePayload?: boolean;
  };
  export type VerifyOptions = {
    algorithms?: string[];
    audience?: string | RegExp | string[];
    clockTimestamp?: number;
    clockTolerance?: number;
    issuer?: string | string[];
    ignoreExpiration?: boolean;
    ignoreNotBefore?: boolean;
    jwtid?: string;
    maxAge?: string | number;
    nonce?: string;
    subject?: string;
    allowInvalidAsymmetricKeyTypes?: boolean;
  };
}