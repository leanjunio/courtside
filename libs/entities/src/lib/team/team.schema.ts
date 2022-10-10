import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../user';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Prop({ required: true })
  name: string;

  @Prop({
    required: true,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  })
  creator: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  members: User[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
