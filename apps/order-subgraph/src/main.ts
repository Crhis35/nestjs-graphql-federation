import { NestFactory } from '@nestjs/core';
import { OrderSubgraphModule } from './order-subgraph.module';
import { ValidationPipe } from '@nestjs/common';

const port = 3003;

async function bootstrap() {
  const app = await NestFactory.create(OrderSubgraphModule);
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}
bootstrap();
