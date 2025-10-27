import { HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(createUserDto: CreateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
        data: Partial<import("./user.schema").User>;
    }>;
}
