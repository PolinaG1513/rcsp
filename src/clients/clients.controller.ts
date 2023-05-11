import {ClientsService } from './clients.service';
import {Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import {Clients} from './clients.entity';
import { CreateClientsDTO } from './dto/ClientsDTO';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('clients')
@ApiTags('Клиенты')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}

    @Get() 
        findAll() {
        return this.clientsService.findAll();
    }
    @Get(':id')
        findOne(@Param('id') id: string) {
        return this.clientsService.findOne(+id);
    }
    @Put(':id')
        update(@Param('id') id: string, @Body() updateClients: Clients) {
        return this.clientsService.update(+id, updateClients);
    }
@ApiOperation({summary: 'Создание клиента'})
    @Post()
        create(@Body() clientsDTO: CreateClientsDTO) {
        return this.clientsService.create(clientsDTO);
    }   

    @Delete(':id')
        remove(@Param('id') id: string) {
        return this.clientsService.remove(+id);
    }
}  