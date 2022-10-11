import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      /**
       * Extracts the JWT from the request supplied from the Authorization header
       * in the API requests as a Bearer Token
       */
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      /**
       * Allows the Passport module to check and see if the JWT is expired and if
       * so, the request is denied and a 401 Unauthorized response is sent back
       */
      ignoreExpiration: false,
      secretOrKey: getEnvironmentVariables('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
