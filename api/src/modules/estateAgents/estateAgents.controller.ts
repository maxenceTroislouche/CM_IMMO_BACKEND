import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { EstateAgentsService } from './estateAgents.service';
import { CreateEstateAgentDto } from './dto/create-estateAgent.dto';
import { UpdateEstateAgentDto } from './dto/update-estateAgent.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Estate agents")
@ApiBearerAuth()
@Controller('agents')
export class EstateAgentsController {
  constructor(private readonly agentsService: EstateAgentsService) {}

  //TODO : Remove some of this endpoints

  @Post()
  @ApiOperation({ summary: 'Create an estate agent' })
  @HttpCode(HttpStatus.OK)
  create(@Body() createAgentDto: CreateEstateAgentDto) {
    return this.agentsService.create(createAgentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all estate agents' })
  findAll() {
    return this.agentsService.findAll();
  }

  @Get('/id/:id')
  @ApiOperation({ summary: 'Get an estate agent with the corresponding ID' })
  findOneById(@Param('id') id: number) {
    return this.agentsService.findOneById(id);
  }

  @Get('/username/:username')
  @ApiOperation({ summary: 'Get an estate agent with the corresponding username' })
  findOneByUsername(@Param('username') username: string) {
    return this.agentsService.findOneByUsername(username);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an estate agent with the corresponding ID' })
  update(@Param('id') id: number, @Body() updateAgentDto: UpdateEstateAgentDto) {
    return this.agentsService.update(id, updateAgentDto);
  }

  @ApiOperation({ summary: 'Delete an estate agent with the corresponding ID' })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.agentsService.remove(id);
  }
}
