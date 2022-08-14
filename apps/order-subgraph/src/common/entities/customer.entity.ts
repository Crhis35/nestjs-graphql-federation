import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Invoice } from '../../invoices/entities/invoice.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Customer {
  @Directive('@external')
  @Field(() => ID)
  id: string;

  @Field(() => [Invoice])
  invoices?: Invoice[];
}
