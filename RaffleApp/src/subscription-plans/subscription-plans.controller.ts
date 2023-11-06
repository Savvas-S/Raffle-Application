import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubscriptionPlansService } from './subscription-plans.service';
import { SubscriptionPlanDto } from './dto/subscriptionPlans-Dto';

@Controller('subscription-plans')
export class SubscriptionPlansController {
    constructor(private spService: SubscriptionPlansService){}

    @Post('create_subscriptionPlan')
    async create_plan(@Body() body: SubscriptionPlanDto){
        return this.spService.create_subscriptionPlan(body.plan_name,body.price,body.features)
    }

    @Post('modify_subscriptionPlan')
    async modify_plan(@Body() body: SubscriptionPlanDto) {
        return await this.spService.modify_plan(
            body.plan_name,
            body.price,
            body.features
        )
    }

    @Get('get_allSubscriptionPlans')
    async get_allSp(){
        return this.spService.get_allPlans()
    }

    @Get('get_SubscriptionPlan/:plan_name')
    async get_Sp(@Param("plan_name") plan_name:string){
        return this.spService.getPlanbyName(plan_name)
    }

    @Delete('delete_subscriptionPlan/:plan_name')
    async delete_plan(@Param('plan_name') plan_name: string) {
        return await this.spService.delete_subscriptionPlan(plan_name);
}
}
