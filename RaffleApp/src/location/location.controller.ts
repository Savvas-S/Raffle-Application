import { Controller, Post, Body, Param } from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';
import { LocationDto } from './dtos/location-dto';


@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('/User/addLocation/:email')
  async assignLocation(@Param('email') email: string, @Body() locationData: Partial<Location>) {
    try {
      const location = await this.locationService.addLocationToUser(email, locationData);
      return location
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
  @Post('/User/updateLocation/:user_id')
    async updateLocation(@Param("user_id") user_id:number, @Body() body: LocationDto){
      return this.locationService.updateLocation(user_id, body)      
    }
  
}