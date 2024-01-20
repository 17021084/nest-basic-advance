import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ParseIntPipe,
  Query,
  ParseBoolPipe,
  Req,
  HttpCode,
  Header,
  Redirect,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { CreateUserDto } from './dto/create-user.dto';
import { Request, Response } from 'express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  async addUser(@Body() createUser: User): Promise<any> {
    return this.userService.addUser(createUser);
  }

  // Details controller view here : https://docs.nestjs.com/controllers
  @Get()
  getUsers(
    // @Param('userId', ParseIntPipe) userId: string,
    // @Query('sort', ParseBoolPipe) sort: boolean,
    // @Body() users: CreateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const data = this.userService.getUsers();
    return res.status(HttpStatus.OK).send({ data });
  }

  @Get(':email')
  // @HttpCode(204) // override default response code
  // @Redirect('')
  // @Header('Cache-Control', 'none')
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
