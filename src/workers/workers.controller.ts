import {WorkersService } from 'src/workers/workers.service';
import {Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import {Workers} from 'src/workers/workers.entity';
import { CreateWorkersDto } from './dto/WorkersDTO';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('workers')
@ApiTags('Работники')
export class WorkersController {
    constructor(private readonly workersService: WorkersService) {}

    @Get() 
        findAll() {
        return this.workersService.findAll();
    }
    @Get(':id')
        findOne(@Param('id') id: string) {
        return this.workersService.findOne(+id);
    }
    @Put(':id')
        update(@Param('id') id: string, @Body() updateWorkers: Workers) {
        return this.workersService.update(+id, updateWorkers);
    }
@ApiOperation({summary: 'Создание работника'})
    @Post()
        create(@Body() workersDTO: CreateWorkersDto) {
        return this.workersService.create(workersDTO);
    }   
    @Delete(':id')
        remove(@Param('id') id: string) {
        return this.workersService.remove(+id);
    }
}  