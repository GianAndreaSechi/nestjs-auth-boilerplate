import { Controller, Get, Param, Scope } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller({path: 'users', scope: Scope.REQUEST})
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    getUsers() {
        return this.userService.findAll();
    }
    @Get(':username')
    getUser(@Param('username') username: string) {
        return this.userService.findUser(username);
    }
}