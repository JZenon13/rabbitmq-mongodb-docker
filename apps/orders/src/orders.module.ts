import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import * as Joi from "joi"
import { DatabaseModule } from '@app/common';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: Joi.object({
      MONGODB_URI: Joi.string()
    }),
    envFilePath: process.env.MONGOBD_URI
  }),
  DatabaseModule
],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
