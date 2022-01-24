import { Test, TestingModule } from '@nestjs/testing';
import { MeasurementsService } from './measurements.service';
import { prisma, PrismaClient } from "@prisma/client";
import { prismaMock } from '../prisma/singleton'



test('should create new measurement ', async () => {
  const measurementDto = {
    id: 1,
    name: 'Rich',
    unit: 'hello@prisma.io',
    upper_limit: "131",
    lower_limit: "122",
    created

  }

  prismaMock.measurement.create.mockResolvedValue(measurementDto)

  await expect(create(user)).resolves.toEqual({
    id: 1,
    name: 'Rich',
    email: 'hello@prisma.io',
  })
})
