import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Resolver(() => Order)
export class OrdersResolver {
  constructor(private readonly ordersService: OrdersService) {}

  @Query(() => Order)
  getOrder(@Args('id') id: string): Order {
    return this.ordersService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Order {
    return this.ordersService.findById(reference.id);
  }
}
