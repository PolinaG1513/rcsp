import {Module} from '@nestjs/common';
import {ToursService } from 'src/tours/tours.service';
import {ToursController} from 'src/tours/tours.controller';
import {DatasourceModuless} from 'src/tours/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workers } from 'src/workers/workers.entity';
import { Tours } from 'src/tours/tours.entity';
import { Clients } from 'src/clients/clients.entity';

@Module ({
    controllers: [ToursController],
    providers: [ToursService],
    imports: [DatasourceModuless, TypeOrmModule.forFeature([Workers, Tours]),],
})
export class ToursModule {}

