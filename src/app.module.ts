import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], // url을 가져오고 함수 실행(라우터)
  providers: [], // 실제로 function을 가지는 부분
})
export class AppModule {}
