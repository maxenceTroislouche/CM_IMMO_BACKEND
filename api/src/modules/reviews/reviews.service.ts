import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { FindOneReviewDto } from './dto/review-findone.dto';

@Injectable()
export class ReviewsService {
    @InjectRepository(Review)
    private reviewsRepository: Repository<Review>;

    async findOne(id: number) {
        let review = await this.reviewsRepository.findOne({
            where: {id: id},
            relations: ['contract', 'contract.property', 'contract.property.rooms', 'minutes', 'minutes.element', 'minutes.element.elementType', 'minutes.element.room'],
        });

        let findOneReviewDto = new FindOneReviewDto();
        return review;
    }
}
