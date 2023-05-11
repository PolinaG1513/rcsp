import {Module} from '@nestjs/common';
import {WorkersService } from 'src/workers/workers.service';
import {WorkersController} from 'src/workers/workers.controller';
import {DatasourceModules} from 'src/workers/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workers } from './workers.entity';
import { Tours } from 'src/tours/tours.entity';
import { Clients } from 'src/clients/clients.entity';

@Module ({
    controllers: [WorkersController],
    providers: [WorkersService],
    imports: [DatasourceModules, TypeOrmModule.forFeature([Clients, Workers, Tours]),],
})
export class WorkersModule {}