import { Module } from '@nestjs/common';
import { PingModule } from './modules/ping.module';

/* Connection */
import { createConnection } from 'typeorm';
import { dbConfig } from './ormconfig';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    PingModule, 
    UsersModule,
    AuthModule
  ],
})
export class AppModule {
}
