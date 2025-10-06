import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { UserGQL } from './user.object';
import { UserService } from './user.service';

@Resolver(() => UserGQL)
export class UsersResolver {
  constructor(private userService: UserService) {}

  @Query(() => UserGQL, {
    nullable: true,
  })
  getUser(@Args('id', { type: () => String }) id: string): UserGQL | null {
    return this.userService.getUser(id);
  }

  @Query(() => [UserGQL])
  listUsers(@Args('limit', { type: () => Int }) limit: number): UserGQL[] {
    return this.userService.listUsers(limit);
  }
}
