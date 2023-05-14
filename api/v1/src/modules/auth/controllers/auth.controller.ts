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
  import { AuthDto } from '../dto/auth.dto';
  import { BearerDto } from '../dto/bearer.dto';
  import { AuthorizationDto } from '../dto/authorization.dto';

  import { SetMetadata } from '@nestjs/common';
  import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
  import { UserEntity } from 'src/modules/users/entities/user.entity';
import { plainToClass } from 'class-transformer';

  const AllowUnauthorizedRequest = () => SetMetadata('allowUnauthorizedRequest', true);

  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @AllowUnauthorizedRequest()
    @ApiOkResponse({
      description: 'The user records',
      type: BearerDto,
      isArray: true
    })  
    signIn(@Body() signInDto: AuthDto) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    //@UseGuards(AuthGuard)
    @Get('profile')
    @ApiOkResponse({
      description: 'The user records',
      type: AuthorizationDto,
      isArray: true
    }) 
    
    @ApiBearerAuth('access-token')
    getProfile(@Request() req): AuthorizationDto {
      const user = plainToClass(AuthorizationDto, req.user);
      return user;
    }
  }
  
