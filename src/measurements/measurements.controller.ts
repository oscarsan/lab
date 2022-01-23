import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { MeasurementsService } from './measurements.service';


@Controller('measurements')
export class MeasurementsController {
  constructor(private readonly measurementsService: MeasurementsService) {}

  @Post()
  create(@Body() measurement: Prisma.MeasurementCreateInput) {
    return this.measurementsService.create(measurement);
  }

  @Get()
  findAll() {
    return this.measurementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.measurementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() measurement: Prisma.MeasurementUpdateInput) {
    return this.measurementsService.update(+id, measurement);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.measurementsService.remove(+id);
  }
}
