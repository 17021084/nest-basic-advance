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
  ParseIntPipe,
  Query,
  ParseBoolPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // Auto payload (all are string) -> Type In DTO
  addUser(@Body() createUser: CreateUserDto): User {
    return this.userService.addUser(createUser);
  }
  // user?id=1&&sort=asc
  @Get()
  getUsers(
    @Query('id', ParseIntPipe) id: number,
    @Query('sort', ParseBoolPipe) sort: boolean, // Auto parse sort data type from string to boolean
  ) {
    console.log('type of id is ', typeof id);
    console.log('type of sort is ', typeof sort);
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): User {
    return this.userService.getUser(id);
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
