import { Users } from 'src/users/user.entity';
export declare class Location {
    location_id: number;
    country: string;
    city: string;
    state: string;
    street: string;
    zip_code: number;
    user: Users;
}
