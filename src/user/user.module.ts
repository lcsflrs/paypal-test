import { Module } from '@nestjs/common';
import { UsersResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  providers: [UserService, UsersResolver],
})
export class UserModule {}
