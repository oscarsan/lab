import { HttpStatus, Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateMeasurementDto } from './dto/createMeasurement.dto';
import { UpdateMeasurementDto } from './dto/updateMeasurement.dto';

@Injectable()
export class MeasurementsService {

  constructor(private prisma: PrismaService) {}

  create(measurement: CreateMeasurementDto) {
    return this.prisma.measurement.create({
      data: measurement,
    });
  }

  findAll() {
    return this.prisma.measurement.findMany();
  }

  findOne(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) 
  id: number) {
    return this.prisma.measurement.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, measurement: UpdateMeasurementDto) {
    return this.prisma.measurement.update({
      where: {
        id,
      },
      data: measurement,
    });
  }

  remove(id: number) {
    return this.prisma.measurement.delete({
      where: {
        id,
      },
    });
  }
}
