import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
    name: 'user',
    database: 'myPocket'
})
export class UserEntity {
    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;
}