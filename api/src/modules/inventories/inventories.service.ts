import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class InventoriesService {
  @InjectRepository(Inventory)
  private inventoriesRepository: Repository<Inventory>;

  async findOne(id: number) {
    let review = await this.inventoriesRepository.findOne({
      where: { id: id },
      relations: [
        'contract',
        'contract.property',
        'contract.property.rooms',
        'minutes',
        'minutes.element',
        'minutes.element.elementType',
        'minutes.element.room',
      ],
    });
    return review;
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    let inventory = new Inventory();
    inventory.progress = updateInventoryDto.progress;
    return this.inventoriesRepository.update(id, inventory);
  }
}
