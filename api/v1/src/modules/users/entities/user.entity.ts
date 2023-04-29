import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;
}