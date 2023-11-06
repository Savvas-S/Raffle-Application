import { BadRequestException, Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}
    async register(name:string,surname:string,username:string,
            email:string,password:string,contact_number:number,gender:string, date_of_birth:Date){
        const [new_user] = await this.usersService.getAllUsers(email)
        if (new_user) {
        throw new BadRequestException('Email already exists');
        }
        const password_extension = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, password_extension, 32)) as Buffer;
        const result = password_extension + '.' + hash.toString('hex');
        password = result
        const user = await this.usersService.sign_up(name,surname,username,email,password,contact_number,gender,date_of_birth);
        return user
        }


    async sign_in(email:string, password:string){
        const user = await this.usersService.getUserbyEmail(email)
        if (!user) {
            throw new BadRequestException('Account not register');
        }
        const [password_extension, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, password_extension, 32)) as Buffer;
        if (storedHash !== hash.toString('hex')) {
          throw new BadRequestException('Incorrect password');
        }
        return user;
    }

    async password_reset(email:string, password:string){
        const users = await this.usersService.getUserbyEmail(email)
        if (!users) {
            throw new BadRequestException('Invalid email');
        }
        
        // verification function here

        const password_extension = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, password_extension, 32)) as Buffer;
        const result = password_extension + '.' + hash.toString('hex');
        password = result
        users.password = password
        const user = await this.usersService.password_reset(users)
        return user
    }

}