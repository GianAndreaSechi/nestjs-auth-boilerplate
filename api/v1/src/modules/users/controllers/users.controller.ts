import { Controller, Get, Post, Param, Scope, Body, HttpStatus,HttpCode } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserDto } from '../entities/dto/user.dto';
import { UserResponseDto } from '../entities/dto/user.response.dto';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
  
@ApiBearerAuth('access-token') 
@Controller({path: 'users', scope: Scope.REQUEST})
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    
    @HttpCode(HttpStatus.OK)
    @Get()
    @ApiOkResponse({
        description: 'The user records',
        type: UserResponseDto,
        isArray: true
    })  
    getUsers() {
        return this.userService.findAll();
    }

    @HttpCode(HttpStatus.OK)
    @Get('/id/:id')
    @ApiOkResponse({
        description: 'Find user by id',
        type: UserResponseDto,
        isArray: true
    }) 
    getUserById(@Param('id') id: bigint) {
        return this.userService.findOneById(id);
    }

    @HttpCode(HttpStatus.OK)
    @Get('/username/:username')
    @ApiOkResponse({
        description: 'Find user by username',
        type: UserResponseDto,
        isArray: true
    }) 
    getUser(@Param('username') username: string) {
        return this.userService.findOneByUsername(username);
    }

    @HttpCode(HttpStatus.OK)
    @Post('/create')
    @ApiOkResponse({
        description: 'Create User',
        type: UserResponseDto,
        isArray: true
    }) 
    addUser(@Body() payload: UserDto){
        return this.userService.addUser(payload);
    }
}