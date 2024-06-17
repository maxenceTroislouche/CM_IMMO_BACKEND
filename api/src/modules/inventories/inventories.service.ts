import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inventory } from './entities/inventory.entity';
import { Repository } from 'typeorm';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Contract } from './entities/contract.entity';

@Injectable()
export class InventoriesService {
  @InjectRepository(Inventory)
  private inventoriesRepository: Repository<Inventory>;

  async findOne(id: number) {
    const inventory = await this.inventoriesRepository.find({
      relations: [
        'contract',
        'contract.third',
        'contract.property',
      ],
    });
    return inventory;
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    let inventory = new Inventory();
    inventory.progress = updateInventoryDto.progress;
    return this.inventoriesRepository.update(id, inventory);
  }
}
