import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';

@Module({
  imports: [],
  controllers: [MovieController], // url을 가져오고 함수 실행(라우터)
  providers: [MovieService], // 실제로 function을 가지는 부분
})
export class AppModule {}
