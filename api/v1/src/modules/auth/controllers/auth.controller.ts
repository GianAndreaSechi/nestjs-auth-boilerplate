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
  const AllowUnauthorizedRequest = () => SetMetadata('allowUnauthorizedRequest', true);

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @AllowUnauthorizedRequest()
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    //@UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  }
  
