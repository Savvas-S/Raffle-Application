import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { Role } from 'src/role/role.entity';
export declare class UsersService {
    private userReposiroty;
    private roleRepository;
    constructor(userReposiroty: Repository<Users>, roleRepository: Repository<Role>);
    sign_up(name: string, surname: string, username: string, email: string, password: string, contact_number: number, gender: string, date_of_birth: Date): Promise<Users>;
    getAllUsers(email: string): Promise<Users[]>;
    getUserbyEmail(email: string): Promise<Users>;
    getUserbyId(user_id: number): Promise<Users>;
    delete_account(email: string): Promise<Users>;
    password_reset(user: Users): Promise<Users>;
    role_assignment(email: string): Promise<Role>;
    change_contactNumber(user_id: number, contact_number: number): Promise<import("typeorm").UpdateResult>;
}
