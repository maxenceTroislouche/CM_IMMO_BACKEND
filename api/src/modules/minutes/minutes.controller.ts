import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MinutesService } from './minutes.service';
import { CreateMinuteDto } from './dto/create-minute.dto';
import { UpdateMinuteDto } from './dto/update-minute.dto';
import { FindMinuteDto } from './dto/find-minute.dto';
import { Minute } from './entities/minute.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Minutes")
@ApiBearerAuth()
@Controller('minutes')
export class MinutesController {
  constructor(private readonly minutesService: MinutesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a minute' })
  create(@Body() createMinuteDto: CreateMinuteDto) {
    return this.minutesService.create(createMinuteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all minutes' })
  findAll() {
    return this.minutesService.findAll();
  }

  @Get(':id_edl/:id_element')
  @ApiOperation({ summary: 'Get a minute by his id' })
  findOne(
    @Param() findMinuteDto: FindMinuteDto
  ): Promise<Minute> {
    return this.minutesService.findOne(findMinuteDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Change a minute' })
  update(@Param() findMinuteDto: FindMinuteDto, @Body() updateMinuteDto: UpdateMinuteDto) {
    return this.minutesService.update(findMinuteDto, updateMinuteDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a minute' })
  remove(@Param() findMinuteDto: FindMinuteDto) {
    return this.minutesService.remove(findMinuteDto);
  }
}

/*

@Get()
  async findAll(): Promise<Minute[]> {
    return this.minuteService.findAll();
  }

  @Get(':id_edl/:id_element')
  async findOne(
    @Param('id_edl') id_edl: number,
    @Param('id_element') id_element: number,
  ): Promise<Minute> {
    return this.minuteService.findOne(id_edl, id_element);
  }

*/