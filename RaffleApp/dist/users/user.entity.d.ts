import { Location } from 'src/location/location.entity';
import { UserSubscription } from 'src/subscription/subscription.entity';
import { Role } from 'src/role/role.entity';
export declare class Users {
    user_id: number;
    name: string;
    surname: string;
    email: string;
    username: string;
    password: string;
    contact_number: number;
    gender: string;
    date_of_birth: Date | null;
    timestamp: string;
    location: Location;
    subscription: UserSubscription;
    role: Role;
}
