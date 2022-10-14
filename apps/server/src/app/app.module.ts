import { AuthModule, TeamModule, UserModule } from '@courtside/entities';
import { getEnvironmentVariables } from '@courtside/shared/util-environment';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(getEnvironmentVariables('DB_URI'), {
      dbName: getEnvironmentVariables('DB_NAME'),
      user: getEnvironmentVariables('DB_USERNAME'),
      pass: getEnvironmentVariables('DB_PASSWORD'),
    }),
    UserModule,
    TeamModule,
    AuthModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
