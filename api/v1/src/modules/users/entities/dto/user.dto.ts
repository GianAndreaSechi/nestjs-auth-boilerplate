import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {
    @IsString()
    @IsNotEmpty()
    public username: string;

    // Gets only validated if it's part of the request's body
    //@IsOptional()
    @IsString()
    @IsNotEmpty()
    public email: string;

    // Gets only validated if it's part of the request's body
    //@IsOptional()
    @IsString()
    @IsNotEmpty()
    public password: string;

    // Gets only validated if it's part of the request's body
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    public role: string;
}