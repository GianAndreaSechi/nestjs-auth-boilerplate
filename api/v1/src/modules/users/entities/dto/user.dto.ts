import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class UserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public username: string;

    // Gets only validated if it's part of the request's body
    //@IsOptional()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public email: string;

    // Gets only validated if it's part of the request's body
    //@IsOptional()
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public password: string;

    // Gets only validated if it's part of the request's body
    @ApiProperty()
    @IsOptional()
    @IsString()
    public role?: string;
}