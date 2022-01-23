import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MeasurementsService {

  constructor(private prisma: PrismaService) {}

  create(todo: Prisma.MeasurementCreateInput) {
    return this.prisma.measurement.create({
      data: todo,
    });
  }

  findAll() {
    return this.prisma.measurement.findMany();
  }

  findOne(id: number) {
    return this.prisma.measurement.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, todo: Prisma.MeasurementUpdateInput) {
    return this.prisma.measurement.update({
      where: {
        id,
      },
      data: todo,
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
