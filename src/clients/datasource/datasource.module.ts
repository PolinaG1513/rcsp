import {Module} from '@nestjs/common';
import {DatasourseService} from 'src/clients/datasource/datasource.service';

@Module ({
    providers: [DatasourseService],
    exports: [DatasourseService],
})
export class DatasourceModule {}
    