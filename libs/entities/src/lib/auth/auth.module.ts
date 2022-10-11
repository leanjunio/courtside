import { Module } from '@nestjs/common';
import { UserModule } from '../user';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
})
export class AuthModule {}
