import { Controller, Get, Scope } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller({path: 'users', scope: Scope.REQUEST})
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get()
    getUsers() {
        return this.userService.findAll();
    }
}