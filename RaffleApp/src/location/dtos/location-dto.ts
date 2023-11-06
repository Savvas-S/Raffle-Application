import { IsDate, IsEmail, IsInt, IsString, isString } from "class-validator"

export class LocationDto{
    @IsString()
    country:string
    @IsString()
    city:string    
    @IsString()
    state:string
    @IsString()
    street:string
    @IsInt()
    zip_code:number
}