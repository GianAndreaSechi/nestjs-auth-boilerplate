import { Controller, Get, Post, Param, Scope, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDto } from '../entities/dto/user.dto';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
  
@ApiBearerAuth('access-token') 
@Controller({path: 'users', scope: Scope.REQUEST})
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    getUsers() {
        return this.userService.findAll();
    }
    @Get('/id/:id')
    getUserById(@Param('id') id: bigint) {
        return this.userService.findOneById(id);
    }
    @Get('/username/:username')
    getUser(@Param('username') username: string) {
        return this.userService.findOneByUsername(username);
    }
    @Post('/create')
    addUser(@Body() payload: UserDto){
        return this.userService.addUser(payload);
    }
}