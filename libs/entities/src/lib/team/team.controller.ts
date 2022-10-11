import { MongoExceptionFilter } from '@courtside/shared/util-server-exceptions';
import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { CreateTeamDto } from './team';
import { TeamService } from './team.service';

@Controller('teams')
export class TeamController {
  constructor(private teamService: TeamService) {}
  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }
}
