import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';

export class AuthDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public password: string;
}