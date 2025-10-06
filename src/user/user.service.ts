import { Injectable } from '@nestjs/common';
import { UserGQL } from './user.object';

@Injectable()
export class UserService {
  private readonly usersInMemory: UserGQL[] = [
    {
      email: 'john@doe.com',
      name: 'John Doe',
      id: '1',
      age: 25,
    },
    {
      email: 'mosiah@doe.com',
      name: 'Mosiah Azuaje',
      id: '2',
    },
    {
      email: 'lucas@doe.com',
      name: 'Lucas Flores',
      id: '3',
      age: 28,
    },
    {
      email: 'anne@doe.com',
      name: 'Anne Doe',
      id: '4',
      age: 19,
    },
  ];

  getUser(id: string): UserGQL | null {
    const userFound = this.usersInMemory.find((elem) => elem.id === id);

    return userFound ?? null;
  }

  listUsers(limit: number): UserGQL[] {
    const usersLimited = this.usersInMemory.slice(0, limit);

    return usersLimited;
  }
}
