import jwt from "jsonwebtoken";
import { TokenPayload } from "./interfaces/TokenPayload";

export class JwtHelper {
  private SECRET_KEY: string;
  private SECRET_REFRESH_KEY: string;

  constructor(SECRET_KEY: string, SECRET_REFRESH_KEY: string) {
    this.SECRET_KEY = SECRET_KEY;
    this.SECRET_REFRESH_KEY = SECRET_REFRESH_KEY;
  }

  // Método para generar el token
  generateToken<T>(uuid: T, rol: "ADMIN" | "USER", expiresIn: string | number = "24h"): string {
    const payload: TokenPayload<T> = {
      rol,
      uuid
    };
    return jwt.sign(payload!, this.SECRET_KEY, { expiresIn });
  }

  generateRefreshToken<T>(
    payload: T,
    expiresIn: string | number = "7d"
  ): string {
    return jwt.sign(payload!, this.SECRET_REFRESH_KEY, { expiresIn });
  }

  verifyToken<T>(token: string): TokenPayload<T> | null {
    try {
      return jwt.verify(token, this.SECRET_KEY) as TokenPayload<T>;
    } catch (error) {
      console.log("Invalid token jwt", error);
      return null;
    }
  }

  verifyRefreshToken<T>(token: string): T | null {
    try {
      return jwt.verify(token, this.SECRET_REFRESH_KEY) as T;
    } catch (error) {
      console.error("Invalid refresh token:", error);
      return null;
    }
  }

  // Método para refrescar el access token usando un refresh token válido
  refreshAccessToken<T>(
    refreschAccessToken: string,
    expiresIn: string | number = "1h"
  ): string | null {
    const decode = this.verifyRefreshToken<T>(refreschAccessToken);

    if (decode) return this.generateRefreshToken(decode, expiresIn);

    return null;
  }
}