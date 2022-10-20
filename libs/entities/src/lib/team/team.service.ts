import { CreateTeamDto } from '@courtside/shared/dtos';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from './team.schema';

@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    return new this.teamModel(createTeamDto).save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find();
  }
}
