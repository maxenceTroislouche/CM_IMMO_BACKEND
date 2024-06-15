import { PartialType } from '@nestjs/mapped-types';
import { CreateMinuteDto } from './create-minute.dto';

export class UpdateMinuteDto extends PartialType(CreateMinuteDto) {}
