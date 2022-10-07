import { CreateUserDto } from "@courtside/data-access";
import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('User')
export class UserController {
	constructor(private userService: UserService) {}
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}
}