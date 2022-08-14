import { Query, Resolver, ResolveReference, Args } from '@nestjs/graphql';
import { Internal } from './entities/internal.entity';
import { InternalsService } from './internals.service';

@Resolver(() => Internal)
export class InternalsResolver {
  constructor(private readonly internalsService: InternalsService) {}

  @Query(() => Internal)
  getInternal(@Args('id') id: string): Internal {
    return this.internalsService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): Internal {
    return this.internalsService.findById(reference.id);
  }
}
