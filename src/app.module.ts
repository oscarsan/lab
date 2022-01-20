import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeasurementsModule } from './measurements/measurements.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [MeasurementsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
