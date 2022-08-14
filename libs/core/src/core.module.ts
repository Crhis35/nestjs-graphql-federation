import { Module } from '@nestjs/common';
import { CoreService } from './core.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.test',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      validationSchema: Joi.object({
        APP_PORT: Joi.number().required(),
      }),
    }),
  ],
  providers: [CoreService],
  exports: [CoreService],
})
export class CoreModule {}
