import { Injectable } from '@nestjs/common';
import { User } from './interface/user';
@Injectable()
export class UserService {
  public users: User[] = [];
  getUsers(): User[] {
    return this.users;
  }

  getUser(email: string) {
    const user = this.users.filter((user) => user.email === email);
    return user;
  }

  addUser(user: User): User {
    console.log('adding user', user);
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): void {
    const userRemain = this.users.filter((user) => user.email !== email);
    this.users = userRemain;
  }
}
