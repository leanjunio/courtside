import { Injectable } from '@nestjs/common';
import { User, UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.verifyAuthentication(email, password);

    if (user !== null && user.password === password) {
      return user;
    }

    return null;
  }
}
