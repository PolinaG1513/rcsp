import {Module} from '@nestjs/common';
import {ClientsService } from './clients.service';
import {ClientsController} from './clients.controller';
import {DatasourceModule } from 'src/clients/datasource/datasource.module';
import { Workers } from 'src/workers/workers.entity'
import { Tours } from 'src/tours/tours.entity';
import { Clients } from 'src/clients/clients.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module ({
    controllers: [ClientsController],
    providers: [ClientsService],
    imports: [DatasourceModule, TypeOrmModule.forFeature([Clients, Workers]),],
})
export class ClientsModule {}