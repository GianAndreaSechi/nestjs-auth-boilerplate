import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
  } from '@nestjs/common';
  import { AuthGuard } from '../guards/auth.guard';
  import { AuthService } from '../services/auth.service';

  import { SetMetadata } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { UserEntity } from 'src/modules/users/entities/user.entity';
  const AllowUnauthorizedRequest = () => SetMetadata('allowUnauthorizedRequest', true);

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @AllowUnauthorizedRequest()
    @ApiOkResponse({
      description: 'The user records',
      type: UserEntity,
      isArray: true
    })  
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    //@UseGuards(AuthGuard)
    @Get('profile')
    @ApiBearerAuth('access-token')
    getProfile(@Request() req) {
      return req.user;
    }
  }
  
