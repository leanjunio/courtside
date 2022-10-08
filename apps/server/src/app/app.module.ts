import { UserModule } from '@courtside/entities';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
    }),
    UserModule,
  ],
})
export class AppModule {}
