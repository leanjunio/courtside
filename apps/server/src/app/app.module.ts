import { AuthModule, TeamModule, UserModule } from '@courtside/entities';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: process.env.DB_NAME,
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
    }),
    UserModule,
    TeamModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
