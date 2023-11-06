import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dtos/create_role.dto';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService){}

    @Post('/create_role')
    async create_role(@Body() body: CreateRoleDto){
        return this.roleService.create_role(body.role_name)
    }

    @Get('/getall_roles')
    async get_allrole(){
        return this.roleService.getallRoles()
    }
}
