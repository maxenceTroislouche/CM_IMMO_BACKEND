import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdatePropertyDto {
    @ApiProperty()
    @IsNumber()
    progress: number;
}
