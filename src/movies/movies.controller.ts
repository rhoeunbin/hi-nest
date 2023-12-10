import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entitiy';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch(':id') // 일부분만 수정할 때
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    // body 꼭 요청해야 함
    return this.moviesService.update(movieId, updateData);
  }
}
