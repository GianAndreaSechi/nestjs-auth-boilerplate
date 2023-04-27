import { Module } from '@nestjs/common';
import { PingModule } from './modules/ping.module';

/* Connection */
import { createConnection } from 'typeorm';
import { dbConfig } from './ormconfig';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [PingModule, UsersModule],
})
export class AppModule {
  async configure() {
    let TYPEORM_ENTITIES_DB = [
      //insert entities
    ];
    await createConnection({...dbConfig, entities: TYPEORM_ENTITIES_DB});
  }
}
