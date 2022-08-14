import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UserSubgraphModule } from './user-subgraph.module';

const port = 3001;

async function bootstrap() {
  const app = await NestFactory.create(UserSubgraphModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}
bootstrap();
