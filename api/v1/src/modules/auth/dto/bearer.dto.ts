import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class BearerDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    public bearer: string;
}