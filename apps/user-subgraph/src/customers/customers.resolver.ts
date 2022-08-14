import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './entities/customer.entity';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Query(() => Customer)
  getCustomer(@Args('id') id: string): Customer {
    return this.customersService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Customer {
    return this.customersService.findById(reference.id);
  }
}
