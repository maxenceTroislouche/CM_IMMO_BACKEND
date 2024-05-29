import { Injectable } from '@nestjs/common';
import { CreateMinuteDto } from './dto/create-minute.dto';
import { UpdateMinuteDto } from './dto/update-minute.dto';

@Injectable()
export class MinutesService {
  create(createMinuteDto: CreateMinuteDto) {
    return 'This action adds a new minute';
  }

  findAll() {
    return `This action returns all minutes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} minute`;
  }

  update(id: number, updateMinuteDto: UpdateMinuteDto) {
    return `This action updates a #${id} minute`;
  }

  remove(id: number) {
    return `This action removes a #${id} minute`;
  }
}
