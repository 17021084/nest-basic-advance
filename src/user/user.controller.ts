import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
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

  @Get(':id')
  getUser(@Param('email') email: string) {
    return this.userService.getUser(email);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }
}
