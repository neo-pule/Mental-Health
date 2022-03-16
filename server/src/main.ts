import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  var corsOptions = {
    origin: "http://192.168.8.132:8080"
}
  const app = await NestFactory.create(AppModule);
  // app.use(firebaseApp);
  app.enableCors(corsOptions);
  await app.listen(3000);
}
bootstrap();


