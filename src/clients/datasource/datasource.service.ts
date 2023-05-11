import {Injectable} from '@nestjs/common';
import {Clients} from 'src/clients/clients.entity';

@Injectable ()
export class DatasourseService {
    private clients: Clients[] = [];
    getClients() : Clients[] {
        return this.clients;
    }
}