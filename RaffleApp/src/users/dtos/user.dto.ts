import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  user_id: number
  @Expose()
  email: string
  @Expose()
  name: string
  @Expose()
  surname: string
  @Expose()
  date_of_birth: string
  @Expose()
  contact_number: number
  @Expose()
  gender:string
  
}
