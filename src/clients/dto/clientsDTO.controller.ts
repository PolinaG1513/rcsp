import {ClientsService } from 'src/clients/clients.service';
import {Controller, Get} from '@nestjs/common';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Get('incomplete')
        findIncomplete() {
            this.clientsService.findIncomplete();
        }
} 