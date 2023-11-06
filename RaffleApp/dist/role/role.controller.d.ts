import { RoleService } from './role.service';
import { CreateRoleDto } from './dtos/create_role.dto';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    create_role(body: CreateRoleDto): Promise<import("./role.entity").Role>;
    get_allrole(): Promise<import("./role.entity").Role[]>;
}
