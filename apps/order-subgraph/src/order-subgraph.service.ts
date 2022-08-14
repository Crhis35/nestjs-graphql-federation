import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderSubgraphService {
  getHello(): string {
    return 'Hello World!';
  }
}
