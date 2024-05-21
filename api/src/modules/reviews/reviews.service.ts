import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { FindOneReviewDto } from './dto/review-findone.dto';
import { UpdateReviewsDto } from './dto/review-findone.dto';

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

    async update(id: number, updateReviewDto: UpdateReviewsDto) {
        let review = new Review();
        review.username = UpdateReviewsDto.username;
        review.password = UpdateReviewsDto.password;
        return this.agentRepository.update(id,agent);
      }
}
