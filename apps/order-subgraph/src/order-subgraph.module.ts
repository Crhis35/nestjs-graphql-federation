import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { OrderSubgraphController } from './order-subgraph.controller';
import { OrderSubgraphService } from './order-subgraph.service';
import { InvoicesModule } from './invoices/invoices.module';
import { OrdersModule } from './orders/orders.module';
import { Invoice } from './invoices/entities/invoice.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'apps/order-subgraph/schema.gql'),
      cors: true,
      buildSchemaOptions: {
        orphanedTypes: [Invoice],
      },
    }),
    InvoicesModule,
    OrdersModule,
  ],
  controllers: [OrderSubgraphController],
  providers: [OrderSubgraphService],
})
export class OrderSubgraphModule {}
