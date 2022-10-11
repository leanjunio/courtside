import { Injectable } from '@nestjs/common';
import { User, UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne(email);

    if (user.password === password) {
      return user;
    }

    return null;
  }
}
