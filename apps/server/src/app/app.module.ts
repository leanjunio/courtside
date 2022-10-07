import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo/courtside-db'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
