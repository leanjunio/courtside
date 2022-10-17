import { CreateUserDto } from '@courtside/shared/dtos';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
import { Model } from 'mongoose';
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

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async verifyAuthentication(email: string, password: string) {
    const user = await this.userModel.findOne({ email }).exec();

    if (user?.password) {
      const isMatching = bcrypt.compareSync(password, user?.password);

      if (isMatching) {
        return user;
      }
    }

    return null;
  }
}
