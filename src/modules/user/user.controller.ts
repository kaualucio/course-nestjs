import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async createUser(@Body() createUser: CreateUserDTO) {
    // const { name, email, password, cpf, phone } = createUser;

    return this.userService.createUser(createUser);
  }

  @Get('/get-all')
  async getAllUsers() {
    // const { name, email, password, cpf, phone } = createUser;

    return this.userService.getAllUsers();
  }
}
