import { Controller, Get } from '@nestjs/common';
import { OrderSubgraphService } from './order-subgraph.service';

@Controller()
export class OrderSubgraphController {
  constructor(private readonly orderSubgraphService: OrderSubgraphService) {}

  @Get()
  getHello(): string {
    return this.orderSubgraphService.getHello();
  }
}
