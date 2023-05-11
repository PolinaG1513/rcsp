import {Module} from '@nestjs/common';
import {DatasourseService} from 'src/tours/datasource/datasource.service'

@Module ({
    providers: [DatasourseService],
    exports: [DatasourseService],
})
export class DatasourceModuless {} 