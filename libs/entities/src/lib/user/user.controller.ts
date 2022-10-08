import { MongoExceptionFilter } from '@courtside/shared/util-server-exceptions';
import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CreateUserDto } from './user';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
