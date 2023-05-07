import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const dbConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: null,
    database: 'myPocket',
    entities: [__dirname + '/../**/*.entity.js'], //use .js because .ts broke the things
    synchronize: false,
};