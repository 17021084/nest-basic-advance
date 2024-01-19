import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';
@Injectable()
export class UserService {
  public users: User[] = [];
  getUsers(): User[] {
    return this.users;
  }

  getUser(email: string): User {
    const user = this.users.filter((user) => user.email === email);
    if (user.length > 0) {
      return user[0];
    }
    throw new NotFoundException('User not found');
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  updateUser(email: string, name: string): User {
    let found: boolean = false;
    let udatedUser: User;
    this.users = this.users.filter((user) => {
      if (user.email === email) {
        user.name = name;
        found = true;
        udatedUser = user;
      }
    });
    if (found) {
      return udatedUser;
    }
    throw new NotFoundException('User not found');
  }

  deleteUser(email: string): User[] {
    const userRemain = this.users.filter((user) => user.email !== email);
    this.users = userRemain;
    return userRemain;
  }



}
