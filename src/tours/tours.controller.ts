import {ToursService} from 'src/tours/tours.service';
import {Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import {Tours} from 'src/tours/tours.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('tours')
@ApiTags('Туры')
export class ToursController {
    constructor(private readonly toursService: ToursService) {}

    @Get() 
        findAll() {
        return this.toursService.findAll();
    }
    @Get(':id')
        findOne(@Param('id') id: string) {
        return this.toursService.findOne(+id);
    }
    @Put(':id')
        update(@Param('id') id: string, @Body() updateTours: Tours) {
        return this.toursService.update(+id, updateTours);
    }
@ApiOperation({summary: 'Создание тура'})
    @Post()
        create(@Body() createTours: Tours) {
        return this.toursService.create(createTours);
    }   
    @Delete(':id')
        remove(@Param('id') id: string) {
        return this.toursService.remove(+id);
    }
} 