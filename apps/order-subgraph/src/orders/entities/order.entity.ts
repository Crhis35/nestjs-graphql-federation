import { Location } from '@lib/core/entities';
import { Customer } from '../../common/entities/customer.entity';
import {
  Directive,
  Field,
  Float,
  ID,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

export enum OrderStatus {
  PENDING = 'PENDING',
  PAYMENT_DUE_DATE = 'PAYMENT_DUE_DATE',
}

registerEnumType(OrderStatus, {
  name: 'OrderStatus',
});

@ObjectType()
@Directive('@key(fields: "id")')
export class Order {
  @Field(() => ID)
  id: string;

  @Field(() => OrderStatus)
  status: OrderStatus;

  @Field(() => Customer)
  sender: Customer;

  @Field(() => Customer)
  receiver: Customer;

  @Field(() => Location)
  shipping: Location;

  @Field(() => Float)
  price: number;

  @Field(() => Boolean)
  paid: boolean;
}
