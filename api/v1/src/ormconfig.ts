import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

require('dotenv').config();
export const dbConfig: MysqlConnectionOptions = {
    name: '',
    type: 'mysql',
    host: '127.0.0.1',
    logging: false,
    port: 3306,
    username: 'root',
    password: '',
    database: '',
};