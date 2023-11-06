import { Body, Controller, Param, Get, Post, Query, Delete, Session, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user-dto';
import { UpdateUserDto } from './dtos/update-user-dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from 'src/users/dtos/user.dto';
import { AuthService } from './auth.service';
import {scrypt as _scrypt } from 'crypto';
import { Users } from './user.entity';
import { AuthGuard } from '../guards/auth.guard';
import { CurrentUser } from './decorators/current-user.decorator';
import { SignUserDto } from './dtos/sign-in-user-dto';

@Controller('user')
@Serialize(UserDto)
export class UsersController {
    constructor(private userService: UsersService, private authService: AuthService){}

    @Post('/register')
        async createUser(@Body() body: CreateUserDto, @Session() session: any){
        const user = await this.authService.register(body.name,body.surname,body.username,body.email,
            body.password,body.contact_number,body.gender,body.date_of_birth)
        session.user_id = user.user_id;
        return user
        } catch (error) {
        return { error: error.message
        }
    }

    @Post('/signin')
    async sign_in(@Body() body: SignUserDto, @Session() session: any) {
        const user = await this.authService.sign_in(body.email, body.password)
        session.userId = user.user_id; 
        return user
    }

    @Post('/signout')
    signOut(@Session() session: any) {
      session.userId = null;
    }

    @Get('/whoami')
    @UseGuards(AuthGuard)
    whoAmI(@CurrentUser() user: Users) {
      return user;
    }

    @Get("/getUsers")
    getallUsers(@Query("email") email:string){
        return this.userService.getAllUsers(email)
    }

    @Get("/getUserById/:user_id")
    getUser(@Param("user_id") user_id:number){
        return this.userService.getUserbyId(user_id)
    }


    @Get("/getUserByEmail/:email")
    getUserbyemail(@Param("email") email:string){
        return this.userService.getUserbyEmail(email)
    }

    @Delete("/delete_account/:email")
    removeUser(@Param("email") email:string){
        return this.userService.delete_account(email)
    }

    @Post('/password_reset/:email')
    updateUser(@Param('email') email: string, @Body() body: UpdateUserDto) {
      return this.authService.password_reset(email, body.password)
    }

    @Post('/update_contactNumber/:user_id')
    async update_contactNumber(@Param("user_id") user_id:number, @Body() body: { contact_number:number }){
        return this.userService.change_contactNumber(user_id, body.contact_number)
    }
    
}

