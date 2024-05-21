import { Controller, Get, Param, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';


@ApiTags("Reviews")
@ApiBearerAuth()
@Controller('edl')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}

    // GET /edl/:id
    @Get(':id')
    @ApiOperation({ summary: 'Get one review by id' })
    async findOne(@Param('id') id: string) {
        return await this.reviewsService.findOne(+id);
    }

    // PATCH /edl/:id
    @Patch(':id')
    @ApiOperation({ summary: 'Update a review' })
    async update(@Param('id') id: string) {
        return await this.reviewsService.update(+id);
    }

    /*
@Patch(':id')
  @ApiOperation({ summary: 'Update an estate agent with the corresponding ID' })
  update(@Param('id') id: number, @Body() updateAgentDto: UpdateEstateAgentDto) {
    return this.agentsService.update(id, updateAgentDto);
  }
    */
}
