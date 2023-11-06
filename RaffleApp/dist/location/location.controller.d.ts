import { LocationService } from './location.service';
import { Location } from './location.entity';
import { LocationDto } from './dtos/location-dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    assignLocation(email: string, locationData: Partial<Location>): Promise<Location | {
        success: boolean;
        error: any;
    }>;
    updateLocation(user_id: number, body: LocationDto): Promise<import("typeorm").UpdateResult>;
}
