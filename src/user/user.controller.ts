import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() createUser: CreateUserDto): User {
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
  update(@Param('email') email: string, @Body() updateUser: UpdateUserDto) {
    return this.userService.updateUser(email, updateUser.name);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.userService.deleteUser(email);
  }
}
