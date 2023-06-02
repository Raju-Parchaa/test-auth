import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../typeorm.config';
import { ClientCredentials } from './entities/client.entity';

@Module({
  imports:[
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([ClientCredentials]),
],
  providers: [ClientService],
  exports:[ClientService]
})
export class ClientModule {}
