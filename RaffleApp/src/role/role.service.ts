import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>){}


    async create_role(role_name:string){
        const role = await this.roleRepository.findOneBy({role_name})
        if(role){
            throw new BadRequestException('Role already exists');
        }
        const new_role = await this.roleRepository.create({role_name})
        return this.roleRepository.save(new_role)
    }

    async getallRoles(){
        return this.roleRepository.find()
    }
}
