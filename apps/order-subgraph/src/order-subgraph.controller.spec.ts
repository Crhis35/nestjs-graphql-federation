import { Test, TestingModule } from '@nestjs/testing';
import { OrderSubgraphController } from './order-subgraph.controller';
import { OrderSubgraphService } from './order-subgraph.service';

describe('OrderSubgraphController', () => {
  let orderSubgraphController: OrderSubgraphController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderSubgraphController],
      providers: [OrderSubgraphService],
    }).compile();

    orderSubgraphController = app.get<OrderSubgraphController>(OrderSubgraphController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderSubgraphController.getHello()).toBe('Hello World!');
    });
  });
});
