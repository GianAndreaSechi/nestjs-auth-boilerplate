import { TypeOrmModuleOptions } from "@nestjs/typeorm";

require('dotenv').config();
export const dbConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port:  parseInt(process.env.PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.js'], //use .js because .ts broke the things
    synchronize: false,
};