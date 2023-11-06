import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscriptionPlan } from './subscription-plans.entity';
import { Repository } from 'typeorm';




@Injectable()
export class SubscriptionPlansService {
    constructor(
    @InjectRepository(SubscriptionPlan) private repo: Repository<SubscriptionPlan>,
    ){}
    
    async get_allPlans(){
        return this.repo.find();
    }
    
    async getPlanById(id:number){
        return this.repo.findOneBy({id})
    }

    async getPlanbyName(plan_name:string){
        const plan = await this.repo.findOneBy({plan_name})
        if(!plan){
            throw new BadRequestException('Plan does not exists')
        }
        return plan
    }

    async create_subscriptionPlan(plan_name:string, price:number, features:string){
        const plan = await this.repo.findOneBy({plan_name})
        if(plan){
            throw new BadRequestException('Plan already exists')
        }
        const new_plan = this.repo.create({plan_name, price, features})
        return this.repo.save(new_plan)
    }

    async modify_plan(plan_name: string, price: number, features: string) {
        try {
            const existingPlan = await this.repo.findOneBy({ plan_name })
            if (!existingPlan) {
                throw new NotFoundException('Plan not found')        
            }
            existingPlan.price = price
            existingPlan.features = features
        return this.repo.save(existingPlan)
        } catch (error) {
            return { error: error.message }
        }
    }

    async delete_subscriptionPlan(plan_name: string) {
        try {
            const existingPlan = await this.repo.findOneBy({ plan_name });
            if (!existingPlan) {
            throw new NotFoundException('Plan not found');
            }
            await this.repo.remove(existingPlan);
            return { message: 'Plan deleted successfully' };
        } catch (error) {
            return { error: error.message };
        }
    }
}
