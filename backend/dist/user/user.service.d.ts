import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(createUserDto: CreateUserDto): Promise<{
        message: string;
        user: Partial<User>;
    }>;
    findByEmail(email: string): Promise<UserDocument | null>;
}
