import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { AuthService } from './auth.service';
import { Users } from './user.entity';
import { SignUserDto } from './dtos/sign-in-user-dto';
export declare class UsersController {
    private userService;
    private authService;
    constructor(userService: UsersService, authService: AuthService);
    createUser(body: CreateUserDto, session: any): Promise<Users>;
    catch(error: any): {
        error: any;
    };
    sign_in(body: SignUserDto, session: any): Promise<Users>;
    signOut(session: any): void;
    whoAmI(user: Users): Users;
    getallUsers(email: string): Promise<Users[]>;
    getUser(user_id: number): Promise<Users>;
    getUserbyemail(email: string): Promise<Users>;
    removeUser(email: string): Promise<Users>;
    updateUser(email: string, body: UpdateUserDto): Promise<Users>;
    update_contactNumber(user_id: number, body: {
        contact_number: number;
    }): Promise<import("typeorm").UpdateResult>;
}
