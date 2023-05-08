import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

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
}