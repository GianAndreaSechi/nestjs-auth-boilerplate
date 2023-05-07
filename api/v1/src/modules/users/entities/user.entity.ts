import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name:'user',
    database: 'myPocket'
})
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: bigint;

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @Column()
    role: string;
}