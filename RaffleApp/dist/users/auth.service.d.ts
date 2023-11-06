import { UsersService } from "./users.service";
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    register(name: string, surname: string, username: string, email: string, password: string, contact_number: number, gender: string, date_of_birth: Date): Promise<import("./user.entity").Users>;
    sign_in(email: string, password: string): Promise<import("./user.entity").Users>;
    password_reset(email: string, password: string): Promise<import("./user.entity").Users>;
}
