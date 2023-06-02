import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private secret: string) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: secret,
      });
    }
  
    async validate(payload: any) {
      try {
        return {
          id: payload.sub,
          name: payload.name,
        };
      } catch {
        throw new UnauthorizedException();
      }
    }
}