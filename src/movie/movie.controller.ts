import { Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie id: ${movieId}`;
  }
  @Post()
  create() {
    return 'this will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete one movie id: ${movieId}`;
  }
  @Patch('/:id') // 일부분만 수정할 때
  patch(@Param('id') movieId: string) {
    return `this will patch one movie id: ${movieId}`;
  }
}
