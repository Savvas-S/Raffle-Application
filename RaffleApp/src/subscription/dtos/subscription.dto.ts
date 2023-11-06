import { IsBoolean, IsDate, IsString} from "class-validator"

export class UserSubscriptionDto{
    @IsDate()
    start_date:Date
    @IsDate()
    end_date:Date
    @IsBoolean()
    status:boolean
    @IsString()
    plan_name:string

}