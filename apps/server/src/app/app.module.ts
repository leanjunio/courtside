import { UserModule } from '@courtside/entities';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo/courtside-db'), UserModule],
})
export class AppModule {}
