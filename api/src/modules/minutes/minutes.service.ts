import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateMinuteDto } from './dto/create-minute.dto';
import { UpdateMinuteDto } from './dto/update-minute.dto';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Minute } from './entities/minute.entity';

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

  async findOne(id : number): Promise<Minute> {
    const minute = await this.minuteRepository.findOne({ where: { id } });
    if (!minute) {
      throw new NotFoundException(`Minute with id ${id} not found`);
    }
    return minute;
  }

  async update(id:number, updateMinuteDto: UpdateMinuteDto): Promise<Minute> {
    await this.findOne(id);
    await this.minuteRepository.update({ id }, updateMinuteDto);
    return this.findOne(id);
  }

  async remove(id : number): Promise<void> {
    const result = await this.minuteRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Minute with i ${id} not found`);
    }
  }
}
