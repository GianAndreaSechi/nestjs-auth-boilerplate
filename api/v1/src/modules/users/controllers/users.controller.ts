import { Controller, Get, Post, Param, Scope, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDto } from '../entities/dto/user.dto';

@Controller({path: 'users', scope: Scope.REQUEST})
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    getUsers() {
        return this.userService.findAll();
    }
    @Get(':id')
    getUser(@Param('id') id: bigint) {
        return this.userService.findUser(id);
    }
    @Post('/create')
    addUser(@Body() payload: UserDto){
        return this.userService.addUser(payload);
    }
}