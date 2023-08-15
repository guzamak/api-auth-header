import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

@UseGuards(AuthGuard('header'))
  @Post('login')
  async login(@Req() req) {
    return req.user;
  }

  @Get("")
  show(){
    return"test"
  }
}
