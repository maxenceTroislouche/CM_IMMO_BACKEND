import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ReviewsService } from './reviews.service';


@ApiTags("Reviews")
@ApiBearerAuth()
@Controller('edl')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}

    // GET /edl/:id
    @Get(':id')
    @ApiOperation({ summary: 'Get one property by id' })
    async findOne(@Param('id') id: string) {
        return await this.reviewsService.findOne(+id);
    }

    // PATCH /edl/:id
}
