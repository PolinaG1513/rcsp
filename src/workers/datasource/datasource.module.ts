import {Module} from '@nestjs/common';
import {DatasourseService } from 'src/workers/datasource/datasource.service'

@Module ({
    providers: [DatasourseService],
    exports: [DatasourseService],
})
export class DatasourceModules {}