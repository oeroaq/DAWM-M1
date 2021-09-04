import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('inventario')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id?')
  async get(@Param('id') id) {
    return id? this.appService.getById(id):this.appService.getAll();
  }
  @Post()
  async post(@Body() body) {
    return this.appService.insert(body);
  }
  @Put(':id')
  async put(@Body() body, @Param('id') id) {
    return this.appService.update(id, body);
  }
  @Delete('id')
  async delete(@Param('id') id) {
    return this.appService.delete(id);
  }
}
