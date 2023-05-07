import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UsersModule } from '../users/users.module';
import { jwtConstants } from './auth.constants';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/services/users.service';
import { AuthGuard } from './guards/auth.guard';


@Module({
    imports: [
        UsersModule,
        JwtModule.register({
          global: true,
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      providers: [AuthService],
      controllers: [AuthController],
      exports: [AuthService],
    
})
export class AuthModule {}

