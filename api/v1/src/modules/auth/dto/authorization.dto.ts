import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsInt } from 'class-validator';
import { IntegerType } from 'typeorm';

export class AuthorizationDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public username: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    public id: string;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    public issuedAt: bigint;

    @ApiProperty()
    @IsInt()
    @IsNotEmpty()
    public expireAt: bigint;

}