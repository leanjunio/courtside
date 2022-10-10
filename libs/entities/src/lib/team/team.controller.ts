import { MongoExceptionFilter } from '@courtside/shared/util-server-exceptions';
import { Body, Controller, Post, UseFilters } from '@nestjs/common';
import { CreateTeamDto } from './team';
import { TeamService } from './team.service';

@Controller('Team')
export class TeamController {
  constructor(private teamService: TeamService) {}
  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }
}
