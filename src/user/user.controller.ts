import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  addUser(@Body() createUser: User): User {
    return this.userService.addUser(createUser);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':email')
  getUser(@Param('email') email: string) {
    return this.userService.getUser(email);
  }

  @Patch(':email')
  update(@Param('email') email: string, @Body() updateUser: User) {
    return this.userService.updateUser(email, updateUser.name);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }
}
