import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InventoriesService {
    @InjectRepository(Inventory)
    private reviewsRepository: Repository<Inventory>;

    async findOne(id: number) {
        let review = await this.reviewsRepository.findOne({
            where: {id: id},
            relations: ['contract', 'contract.property', 'contract.property.rooms', 'minutes', 'minutes.element', 'minutes.element.elementType', 'minutes.element.room'],
        });
        return review;
    }

    async update(id: number, updateInventoryDto: UpdateInventoriesDto) {
        let inventory = new Inventory();
        inventory.username = updateInventoryDto.username;
        inventory.password = UpdateReviewsDto.password;
        return this.agentRepository.update(id,agent);
      }
}
