import { Module } from '@nestjs/common';
import { HeaderStrategy } from './header.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'header' }),
  ],
  providers: [HeaderStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
