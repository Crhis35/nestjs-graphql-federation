import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Person {
  @Field(() => String)
  nationalId: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  lastName: string;
}
