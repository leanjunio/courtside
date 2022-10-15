import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, User, UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signup(createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.verifyAuthentication(email, password);

    if (user !== null) {
      return user;
    }

    return null;
  }

  async login({ email, firstName, lastName }: User) {
    const parsedUserDocument = { email, firstName, lastName };
    return {
      access_token: this.jwtService.sign(parsedUserDocument),
      ...parsedUserDocument,
    };
  }
}
