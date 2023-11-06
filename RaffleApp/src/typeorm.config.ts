import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres', 
  host: 'localhost',
  port: 5432,
  // username: 'super_admin',
  // password: 'W3%rD!46wDf4^lq!',
  database: 'raffleapp',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Auto create database schema (for development only)
};


export default config;