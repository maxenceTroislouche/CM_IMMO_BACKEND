import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InventoriesService } from './inventories.service';


@ApiTags("Inventories")
@ApiBearerAuth()
@Controller('iof')
export class InventoriesController {
    constructor(private readonly inventoriesService: InventoriesService) {}

    // GET /edl/:id
    @Get(':id')
    @ApiOperation({ summary: 'Get one property by id' })
    async findOne(@Param('id') id: string) {
        return await this.inventoriesService.findOne(+id);
    }

    // PATCH /edl/:id
}
