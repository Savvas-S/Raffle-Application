import { IsDate, IsEmail, IsString } from "class-validator"

export class CreateUserDto{
    @IsEmail()
    email:string
    @IsString()
    password:string
    @IsDate()
    date_of_birth: Date
    @IsString()
    name:string    
    @IsString()
    surname:string
    @IsString()
    gender:string
    @IsString()
    username:string
    @IsString()
    contact_number:number
}