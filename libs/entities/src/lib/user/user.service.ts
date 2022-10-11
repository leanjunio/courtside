import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const createdUser = new this.userModel(createUserDto);
      return createdUser.save();
    } catch (error) {
      console.log({ message: 'DUDE', error });
      throw error;
    }
  }

  async findOne(user: Partial<UserDocument>): Promise<User> {
    const found = await this.userModel.findOne(user).exec();

    if (!found) {
      throw new NotFoundException();
    }

  async verifyAuthentication(
    email: string,
    password: string
  ): Promise<User | null> {
    return this.userModel.findOne({ email, password }).exec();
  }
}
