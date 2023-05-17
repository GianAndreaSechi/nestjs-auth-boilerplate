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
    
    const userList: UserResponseDto[] = users.map((user: UserEntity) => user.getJson());
    
    return userList;
  }

  findOneAuth(username: string): Promise<UserEntity> {
    return this.usersRepository.findOne({
      where: { username: username }
    });
  }

  async findOneById(id: bigint): Promise<UserResponseDto> {
    const user = await this.usersRepository.findOne({
      where: { id: id }
    });

    return user.getJson();
  }

  async findOneByUsername(username: string): Promise<UserResponseDto> {
    const user = await this.usersRepository.findOne({
      where: { username: username }
    });

    return user.getJson();
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
    .then(user => user.getJson());
  } 
}
