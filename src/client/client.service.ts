import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientCredentials } from './entities/client.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ClientService {
    constructor(
        @InjectRepository(ClientCredentials)
        private readonly credentialsRpository: Repository<ClientCredentials>){}

    async findOne(clientId:string):Promise<any>{
        return this.credentialsRpository.findOne({where:{clientId:clientId}})
    }
}
