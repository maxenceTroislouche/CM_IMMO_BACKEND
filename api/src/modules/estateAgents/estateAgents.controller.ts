import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstateAgentsService } from './estateAgents.service';
import { CreateEstateAgentDto } from './dto/create-estateAgent.dto';
import { UpdateEstateAgentDto } from './dto/update-estateAgent.dto';

@Controller('agents')
export class EstateAgentsController {
  constructor(private readonly agentsService: EstateAgentsService) {}

  @Post()
  create(@Body() createAgentDto: CreateEstateAgentDto) {
    return this.agentsService.create(createAgentDto);
  }

  @Get()
  findAll() {
    return this.agentsService.findAll();
  }

  @Get('/id/:id')
  findOneById(@Param('id') id: string) {
    return this.agentsService.findOneById(id);
  }

  @Get('/username/:username')
  findOneByUsername(@Param('username') username: string) {
    return this.agentsService.findOneByUsername(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAgentDto: UpdateEstateAgentDto) {
    return this.agentsService.update(id, updateAgentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.agentsService.remove(id);
  }
}
