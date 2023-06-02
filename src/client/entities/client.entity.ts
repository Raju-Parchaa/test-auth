import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'client_credentials' }) // Use the exact table name
export class ClientCredentials {

    @PrimaryGeneratedColumn()
    id:string;

    @Column({ name: 'client_id', type: 'text' })
    clientId:string;

    @Column({name:'client_secret', type:'text'})
    clientSecret:string;

}
