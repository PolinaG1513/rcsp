import {Injectable} from '@nestjs/common';
import {Tours} from 'src/tours/tours.entity';

@Injectable ()
export class DatasourseService {
    private tours: Tours[] = [];
    getTours() : Tours[] {
        return this.tours;
    }
} 