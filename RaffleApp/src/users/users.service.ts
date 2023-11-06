import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';
import { Role } from 'src/role/role.entity';



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private userReposiroty: Repository<Users>,
    @InjectRepository(Role) private roleRepository: Repository<Role>
    ){}

    // async sign_up(userData: Partial<Users>): Promise<Users>{
    async sign_up(name:string,surname:string,username:string,
        email:string,password:string,contact_number:number,gender:string,
        date_of_birth:Date){
        const new_user = await this.userReposiroty.create({name,surname,username,email,password,contact_number,gender,date_of_birth})
        const role = await this.role_assignment(email)
        new_user.role = role
        return this.userReposiroty.save(new_user)
    }

    getAllUsers(email: string ){
        return this.userReposiroty.find({ where: { email } });
    }

    getUserbyEmail(email:string){
        const user = this.userReposiroty.findOneBy({email}) 
        return user
    }

    getUserbyId(user_id:number){
        const user = this.userReposiroty.findOneBy({user_id}) 
        return user
    }

    async delete_account(email:string){
        const account = await this.getUserbyEmail(email)
        if (!account){
            throw new Error("User does not exists")
        }
        return this.userReposiroty.remove(account)
    }

    // async password_reset(email: string, attrs: Partial<Users>) {
    async password_reset(user:Users) {
        return this.userReposiroty.save(user);
    }

    async role_assignment(email:string){
        if (email === "savvasbmwm3@gmail.com"){
            const role = await this.roleRepository.findOneBy({role_name:"Admin"}) 
            return role
        }else{
            const role = await this.roleRepository.findOneBy({role_name:"User"}) 
            return role
        }
    }

    async change_contactNumber(user_id:number, contact_number:number){
        const user = await this.userReposiroty.createQueryBuilder().update().set({contact_number: contact_number}).where("user_id = :id", { id: user_id }).execute()
        return user
    }
}