import { Test, TestingModule } from '@nestjs/testing';
import { InternalsResolver } from './internals.resolver';
import { InternalsService } from './internals.service';

describe('InternalsResolver', () => {
  let resolver: InternalsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternalsResolver, InternalsService],
    }).compile();

    resolver = module.get<InternalsResolver>(InternalsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
