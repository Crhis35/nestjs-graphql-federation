import { Query, Resolver, Args, ResolveReference } from '@nestjs/graphql';
import { Invoice } from './entities/invoice.entity';
import { InvoicesService } from './invoices.service';

@Resolver(() => Invoice)
export class InvoicesResolver {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Query(() => Invoice)
  getInvoice(@Args('id') id: string): Invoice {
    return this.invoicesService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Invoice {
    return this.invoicesService.findById(reference.id);
  }
}
