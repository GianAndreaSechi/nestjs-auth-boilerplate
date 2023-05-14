import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { UserDto } from '../entities/dto/user.dto';
import * as bcrypt from 'bcrypt';
import { UserInfo } from 'os';
import { UserResponseDto } from '../entities/dto/user.response.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  async findAll(): Promise<UserResponseDto[]> { 
    const users = await this.usersRepository.find();
    return users.map((user) => ({
      username: user.username,
      email: user.email,
      role: user.role
    }));
  }

  findOneById(id: bigint): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { id: id }
    });
  }

  findOneByUsername(username: string): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { username: username }
    });
  }

  addUser(payload: UserDto): Promise<UserResponseDto> {
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
    
    return this.usersRepository.save(user)
    .then(user => {
      return {
        username: user.username,
        email: user.email,
        role: user.role
      };
    });
  } 
}
