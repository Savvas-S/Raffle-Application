import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/users/user.entity';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { LocationDto } from './dtos/location-dto';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location) private locationRepository: Repository<Location>,
        @InjectRepository(Users) private userRepository: Repository<Users>,
      ) {}

    async addLocationToUser(email: string, locationData: Partial<Location>): Promise<Location> {
        const user = await this.userRepository.findOneBy({email})
        if (!user) {
            throw new NotFoundException('User not found')
        }
        const location = this.locationRepository.create(locationData)
        location.user = user
        return this.locationRepository.save(location)
    }

    async updateLocation(user_id:number, locationData: LocationDto){
        const user = await this.locationRepository.createQueryBuilder().update().set({
            city:locationData.city, country:locationData.country, 
            state:locationData.state, street:locationData.street,
            zip_code:locationData.zip_code
        }).where("userUserId = :id", { id: user_id }).execute()
        return user
    }

}
