import { AuthService, JwtAuthGuard, LocalAuthGuard } from '@courtside/entities';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @Post('auth/signup')
  async signup(@Body() user) {
    return this.authService.signup(user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
