import { Field, Directive, ID } from '@nestjs/graphql';

@Directive('@key(fields: "id")')
export class CoreEntity {
  @Field(() => ID)
  id: string;
}
