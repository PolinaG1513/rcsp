import {Module} from '@nestjs/common';
import {WorkersService } from 'src/workers/workers.service';
import {WorkersController} from 'src/workers/workers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workers } from './workers.entity';
import { Clients } from 'src/clients/clients.entity';

@Module ({
    controllers: [WorkersController],
    providers: [WorkersService],
    imports: [TypeOrmModule.forFeature([Clients, Workers]),],
})
export class WorkersModule {}