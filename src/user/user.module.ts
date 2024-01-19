import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [], // imports other modules from outside of User module
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // share service outside module
})
export class UserModule {}
