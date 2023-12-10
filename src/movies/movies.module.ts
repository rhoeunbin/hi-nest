import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController], // url을 가져오고 함수 실행(라우터)
  providers: [MoviesService], // 실제로 function을 가지는 부분
})
export class MoviesModule {}
