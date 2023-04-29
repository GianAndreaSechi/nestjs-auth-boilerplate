import { Module } from '@nestjs/common';
import { PingModule } from './modules/ping.module';

/* Connection */
import { createConnection } from 'typeorm';
import { dbConfig } from './ormconfig';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    PingModule, 
    UsersModule],
})
export class AppModule {
}
