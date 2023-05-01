import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserDto } from '../entities/dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {  
    return this.usersRepository.find();
  }

  findUser(id: bigint): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { id }
    });
  }

  addUser(payload: UserDto): UserEntity {
    const hashed_password = bcrypt.hashSync(payload.password, 15);
    payload.password = hashed_password;

    var role = 'user';
    if (payload.role) {
       role = payload.role;
    }
    
    const user = this.usersRepository.create({
      username: payload.username,
      password: payload.password,
      email: payload.email,
      role: role
    });
    
    this.usersRepository.save(user);
    return user;
  }
}
