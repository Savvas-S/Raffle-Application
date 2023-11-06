import { Users } from 'src/users/user.entity';
import { Location } from './location.entity';
import { Repository } from 'typeorm';
import { LocationDto } from './dtos/location-dto';
export declare class LocationService {
    private locationRepository;
    private userRepository;
    constructor(locationRepository: Repository<Location>, userRepository: Repository<Users>);
    addLocationToUser(email: string, locationData: Partial<Location>): Promise<Location>;
    updateLocation(user_id: number, locationData: LocationDto): Promise<import("typeorm").UpdateResult>;
}
