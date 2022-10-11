import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.verifyAuthentication(email, password);

    if (user !== null && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({ email: user.email }),
    };
  }
}
