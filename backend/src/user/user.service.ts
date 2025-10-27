import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<{ message: string; user: Partial<User> }> {
    try {
      // Check if user already exists
      const existingUser = await this.userModel.findOne({ email: createUserDto.email });
      if (existingUser) {
        throw new ConflictException('User with this email already exists');
      }

      // Hash password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

      // Create new user
      const newUser = new this.userModel({
        email: createUserDto.email,
        password: hashedPassword,
        createdAt: new Date(),
      });

      const savedUser = await newUser.save();

      // Return user without password
      const { password, ...userWithoutPassword } = savedUser.toObject();

      return {
        message: 'User registered successfully',
        user: userWithoutPassword,
      };
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
