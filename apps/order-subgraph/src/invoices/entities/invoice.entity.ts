import {
  ObjectType,
  Field,
  registerEnumType,
  Float,
  Directive,
  ID,
} from '@nestjs/graphql';
import { Order } from '../../orders/entities/order.entity';
import { Customer } from '../../common/entities/customer.entity';

export enum PaymentMethodsTypes {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  TRANSFER = 'TRANSFER',
  CASH = 'CASH',
}
export enum InvoiceStatus {
  PROCESSING = 'PROCESSING',
  SENT = 'SENT',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}

registerEnumType(PaymentMethodsTypes, {
  name: 'PaymentMethodsTypes',
});

registerEnumType(InvoiceStatus, {
  name: 'InvoiceStatus',
});

@ObjectType()
@Directive('@key(fields: "id")')
export class Invoice {
  @Field(() => ID)
  id: string;

  @Field(() => [Order])
  orders: Order[];

  @Field(() => InvoiceStatus)
  status: InvoiceStatus;

  @Field(() => PaymentMethodsTypes)
  paymentMethod: PaymentMethodsTypes;

  @Field(() => Float)
  tax: number;

  @Field(() => Float)
  price: number;

  @Field(() => Float)
  discount: number;

  @Field(() => Customer)
  client: Customer;
}
