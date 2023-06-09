import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserResponseDto } from './dto/user.response.dto';

@Entity({
    name:'user',
    database: process.env.DB_NAME
})
export class UserEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @PrimaryColumn()
    username: string;

    @ApiProperty()
    @Column()
    password: string;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    role: string;

    getJson(): UserResponseDto {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            role: this.role
        }
    }
}