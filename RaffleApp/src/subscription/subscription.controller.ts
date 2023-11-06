import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { UserSubscriptionDto } from './dtos/subscription.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ExposeSubscriptionDto } from './dtos/epxosesubscription.dto';


@Controller('subscription')
@Serialize(ExposeSubscriptionDto)
export class SubscriptionController {
    constructor(private userSubscriptionService: SubscriptionService){}
    
    @Post('/create_usersubscription/:user_id/:plan_name')
    async createSub(@Param("user_id") user_id: number, @Param("plan_name") plan_name: string, @Body() body: UserSubscriptionDto) {
        try {
            return this.userSubscriptionService.createSubscription(user_id, body.start_date, body.end_date, body.status, plan_name);
        } catch (error) {
            return { error: error.message };
        }
    }

    @Get('find_Usersubscription/:user_id')
    async getUserSub(@Param('user_id') user_id:number){
        return this.userSubscriptionService.find_Usersubscription(user_id)
    }

    @Post('update_usersubscription/:user_id/:plan_name')
    async updateSub(@Param("user_id") user_id:number, @Param("plan_name") plan_name: string, @Body() body: Partial<UserSubscriptionDto>){
        return this.userSubscriptionService.update_userSubscription(user_id,plan_name)
    }
}
