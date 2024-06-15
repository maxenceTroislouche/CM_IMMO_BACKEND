import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateMinuteDto } from './dto/create-minute.dto';
import { UpdateMinuteDto } from './dto/update-minute.dto';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Minute } from './entities/minute.entity';
import { FindMinuteDto } from './dto/find-minute.dto';

@Injectable()
export class MinutesService {
  
    @InjectRepository(Minute)
    private minuteRepository: Repository<Minute>

  
  async create(createMinuteDto: CreateMinuteDto): Promise<Minute> {
    const minute = this.minuteRepository.create(createMinuteDto);
    return await this.minuteRepository.save(minute);
  }

  async findAll(): Promise<Minute[]> {
    return await this.minuteRepository.find();
  }

  async findOne(findMinuteDto: FindMinuteDto): Promise<Minute> {
    const { id_edl, id_element } = findMinuteDto;
    const minute = await this.minuteRepository.findOne({ where: { id_edl, id_element } });
    if (!minute) {
      throw new NotFoundException('Minute not found');
    }
    return minute;
  }

  async update(findMinuteDto: FindMinuteDto, updateMinuteDto: UpdateMinuteDto): Promise<Minute> {
    /*await this.findOne(id);
    await this.minuteRepository.update({ id }, updateMinuteDto);
    return this.findOne(id);*/

    const minute = await this.findOne(findMinuteDto);
        Object.assign(minute, updateMinuteDto);
        return this.minuteRepository.save(minute);
  }

  async remove(findMinuteDto: FindMinuteDto): Promise<void> {
    /*const result = await this.minuteRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Minute with i ${id} not found`);
    }*/
      const minute = await this.findOne(findMinuteDto);
      await this.minuteRepository.remove(minute);
  }
}
