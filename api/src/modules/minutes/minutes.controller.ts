import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MinutesService } from './minutes.service';
import { CreateMinuteDto } from './dto/create-minute.dto';
import { UpdateMinuteDto } from './dto/update-minute.dto';

@Controller('minutes')
export class MinutesController {
  constructor(private readonly minutesService: MinutesService) {}

  @Post()
  create(@Body() createMinuteDto: CreateMinuteDto) {
    return this.minutesService.create(createMinuteDto);
  }

  @Get()
  findAll() {
    return this.minutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.minutesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMinuteDto: UpdateMinuteDto) {
    return this.minutesService.update(+id, updateMinuteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.minutesService.remove(+id);
  }
}
