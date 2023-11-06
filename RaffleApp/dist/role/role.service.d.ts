import { Role } from './role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private roleRepository;
    constructor(roleRepository: Repository<Role>);
    create_role(role_name: string): Promise<Role>;
    getallRoles(): Promise<Role[]>;
}
