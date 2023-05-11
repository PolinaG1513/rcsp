import {HttpStatus, Injectable} from '@nestjs/common';
import {DatasourseService } from 'src/tours/datasource/datasource.service';
import {Tours} from 'src/tours/tours.entity';


@Injectable()
export class ToursService {
    constructor(private readonly datasourceService: DatasourseService) {}

        create(tours: Tours) {
            this.datasourceService.getTours().push(tours);
            return tours;
        }

        findOne(id: number) {
            return this.datasourceService
            .getTours()
            .find((tours) => tours.id === id);
        }

        findAll(): Tours[] {
            return this.datasourceService.getTours();
        }

        update(id: number, updatedTours: Tours) {
            const index = this.datasourceService
            .getTours()
            .findIndex((tours) => tours.id === id);
            this.datasourceService.getTours()[index] = updatedTours;        
            return this.datasourceService.getTours()[index];
        }

        remove(id: number) {
            const index = this.datasourceService
            .getTours()
            .findIndex((tours) => tours.id === id);
            this.datasourceService.getTours().splice(index, 1);
            return HttpStatus.OK;
        }  
}