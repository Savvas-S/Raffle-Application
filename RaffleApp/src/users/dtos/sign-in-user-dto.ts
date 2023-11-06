
import { IsDate, IsEmail, IsString } from "class-validator"

export class SignUserDto{
    @IsEmail()
    email:string
    @IsString()
    password:string
}