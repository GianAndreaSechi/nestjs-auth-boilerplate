import { Module } from '@nestjs/common';
import { PingModule } from './modules/ping.module';

/* Connection */
import { createConnection } from 'typeorm';
import { dbConfig } from './ormconfig';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';

//set authguard globally
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig), 
    PingModule, 
    UsersModule,
    AuthModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    }
  ]
})
export class AppModule {
}
