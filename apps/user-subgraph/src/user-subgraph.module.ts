import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CommonModule } from './common/common.module';
import { UserSubgraphController } from './user-subgraph.controller';
import { UserSubgraphService } from './user-subgraph.service';
import { InternalsModule } from './internals/internals.module';
import { join } from 'path';
import { Internal } from './internals/entities/internal.entity';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: join(process.cwd(), 'apps/user-subgraph/schema.gql'),
      cors: true,
      buildSchemaOptions: {
        orphanedTypes: [Internal],
      },
    }),
    CommonModule,
    InternalsModule,
    CustomersModule,
  ],
  controllers: [UserSubgraphController],
  providers: [UserSubgraphService],
})
export class UserSubgraphModule {}
