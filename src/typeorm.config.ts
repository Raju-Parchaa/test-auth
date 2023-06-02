import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ClientCredentials } from './client/entities/client.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'parchaa_cdss_credentials',
    entities: [ClientCredentials],
    synchronize: true,
  };
  