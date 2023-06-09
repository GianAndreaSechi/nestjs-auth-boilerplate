import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
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
    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    public role?: string;
}