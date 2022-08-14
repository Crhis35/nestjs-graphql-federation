import { Location } from '@lib/core/entities';
import { Directive, ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { Person } from '../../common/entities/person.entity';

@ObjectType()
export class CreditCard {
  @Field(() => Int)
  number: number;

  @Field(() => String)
  expiryMonth: string;

  @Field(() => String)
  expireYear: string;

  @Field(() => String)
  cvv: string;

  @Field(() => String)
  zipCode: string;

  @Field(() => String)
  expiryDate: string;
}

@ObjectType()
@Directive('@key(fields: "id")')
export class Customer extends Person {
  @Field(() => ID)
  id: string;

  @Field(() => [Location])
  shipping: Location[];

  @Field(() => [CreditCard], { nullable: true })
  creditCard: CreditCard[];
}
