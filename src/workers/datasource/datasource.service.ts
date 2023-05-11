import {Injectable} from '@nestjs/common';
import {Workers} from 'src/workers/workers.entity';

@Injectable ()
export class DatasourseService {
    private workers: Workers[] = [];
    getWorkers() : Workers[] {
        return this.workers;
    }
}