import { MongoExceptionFilter } from '@courtside/shared/util-server-exceptions';
import { Body, Controller, Get, Param, Post, UseFilters } from '@nestjs/common';
import { CreateUserDto } from './user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
}
