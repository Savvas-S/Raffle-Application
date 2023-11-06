import { IsNumber, IsString } from "class-validator"

export class SubscriptionPlanDto{
    @IsString()
    plan_name:string
    @IsString()
    features:string
    @IsNumber()
    price:number
}
