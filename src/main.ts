import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

const globalPrefix = '/api';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix(globalPrefix);
    await app.listen(3000);
}
bootstrap();
