import { Injectable } from '@nestjs/common';
import { Clients } from './clients.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Workers } from 'src/workers/workers.entity';
import { CreateClientsDTO } from './dto/ClientsDTO';
import { IncompleteClientsDto } from './dto/incomplete-clients.dto';


@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Workers)
        private readonly workersRepository: Repository<Workers>,
        @InjectRepository(Clients)
        private readonly clientsRepository: Repository<Clients>) {}

        async create(clientsDTO: CreateClientsDTO): Promise<Clients> {
            const client = this.clientsRepository.create();
            client.fullname = clientsDTO.fullname;
            client.dateofbirth = clientsDTO.dateofbirth;
            client.gender = clientsDTO.gender;
            client.document = clientsDTO.document;
            client.telephone = clientsDTO.telephone;
            client.email = clientsDTO.email;
            const workers = await this.workersRepository.findBy({
                id: In(clientsDTO.workers),
            });
            client.workers = workers;
            await this.clientsRepository.save(client);
            return client;
        }

        findOne(id: number): Promise<Clients> {
            return this.clientsRepository.findOne({
                where: {id},
                relations: {workers: true},
            });
        }

        async findAll(): Promise<Clients[]> {
            const clients = await this.clientsRepository.find({
                relations: {workers:true},
            });
            return clients;
        }

        async findIncomplete(): Promise<IncompleteClientsDto[]> {
            const clients = await this.clientsRepository.find();
            const incompleteClints: IncompleteClientsDto[] = clients.map((clients)=>{
                const incompleteClints = new IncompleteClientsDto();
                incompleteClints.id = clients.id;
                incompleteClints.fullname = clients.fullname;
                incompleteClints.dateofbirth = clients.dateofbirth;
                incompleteClints.telephone = clients.telephone;
                return incompleteClints;
            });
            return incompleteClints;
        }

        async update(id: number, updatedClients: Clients) {
            const clients = await this.clientsRepository.findOne({where: {id} });
            clients.fullname = updatedClients.fullname;
            clients.dateofbirth = updatedClients.dateofbirth;
            clients.gender = updatedClients.gender;
            clients.document = updatedClients.document;
            clients.telephone = updatedClients.telephone;
            clients.email = updatedClients.email;
            clients.workers = updatedClients.workers;
            await this.clientsRepository.save(clients);
            return clients;
        }

        remove(id: number) {
            this.clientsRepository.delete({id});
        }   
}

