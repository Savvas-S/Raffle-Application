import { Expose } from "class-transformer";


export class ExposeSubscriptionDto{
    @Expose()
    status:string
    @Expose()
    subscription_startDate:Date
    @Expose()
    subscription_endtDate: Date
}