import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserGQL {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;
  @Field((_) => Int, {
    nullable: true,
  })
  age?: number;
}
