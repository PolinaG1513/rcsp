import {WorkersService } from 'src/workers/workers.service';
import {Controller, Get} from '@nestjs/common';

@Controller('workers')
export class WorkersController {
    constructor(private readonly workersService: WorkersService) {}

    @Get('incomplete')
        findIncomplete() {
            this.workersService.findIncomplete();
        }
}  