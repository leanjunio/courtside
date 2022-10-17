import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto, User, UserService } from '../user';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signup(createUserDto: CreateUserDto) {
    const saltCount = +getEnvironmentVariables('SALT_COUNT');
    const salt = bcrypt.genSaltSync(saltCount);
    const hash = bcrypt.hashSync(createUserDto.password, salt);
    const securedUser = { ...createUserDto, password: hash };
    return this.userService.create(securedUser);
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
