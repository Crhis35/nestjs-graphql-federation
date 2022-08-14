import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Phone {
  @Field(() => Int)
  number: number;

  @Field(() => String)
  countryCode: string;

  @Field(() => String, { nullable: true })
  ext?: string;
}

@ObjectType()
export class Location {
  @Field(() => String)
  country: string;

  @Field(() => String)
  state: string;

  @Field(() => String)
  addressLine1: string;

  @Field(() => String, { nullable: true })
  addressLine2?: string;

  @Field(() => String)
  city: string;

  @Field(() => Phone)
  phone: Phone;

  @Field(() => String)
  postalCode: string;
}
