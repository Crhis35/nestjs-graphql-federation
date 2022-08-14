import { Module } from '@nestjs/common';
import { InternalsService } from './internals.service';
import { InternalsResolver } from './internals.resolver';

@Module({
  providers: [InternalsResolver, InternalsService]
})
export class InternalsModule {}
