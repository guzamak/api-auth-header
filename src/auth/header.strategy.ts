import { Strategy } from 'passport-http-header-strategy';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class HeaderStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({header:'XAPPTOKEN', param: 'access_token', passReqToCallback: true});
  }

  async validate(token: object) {
    const user = await this.authService.validateUser(token);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
