import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { UserResponseDto } from './dto/user.response.dto';

@Entity({
    name:'user',
    database: 'myPocket'
})
export class UserEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: bigint;

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