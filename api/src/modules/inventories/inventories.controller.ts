import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InventoriesService } from './inventories.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@ApiTags('Inventories')
@ApiBearerAuth()
@Controller('inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get one inventory by id' })
  async findOne(@Param('id') id: number) {
    return await this.inventoriesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the progress of an inventory' })
  update(
    @Param('id') id: number,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoriesService.update(id, updateInventoryDto);
  }
}