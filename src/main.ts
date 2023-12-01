import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 파이프 : 미들웨어
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // true로 설정하면 아무 decorator도 없는 어떠한 property의 object를 거른다
      forbidNonWhitelisted: true, // request 자체를 막음
      transform: true, // 유저들이 보낸 것을 원하는 타입을 바꿔줌
    }),
  ); // 유효성 검사
  await app.listen(3000);
}
bootstrap();
