import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true, // passing true here tells the server to reflect the request origin in the response
  });
  await app.listen(3000);
}
bootstrap();
