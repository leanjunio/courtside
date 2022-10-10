import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamController } from './team.controller';
import { Team, TeamSchema } from './team.schema';
import { TeamService } from './team.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  providers: [TeamService],
  exports: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
