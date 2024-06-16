import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class UpdateMinuteDto {
    @ApiProperty()
    @IsNumber()
    id_edl: number;

    @ApiProperty()
    @IsNumber()
    id_element: number;
    
    @ApiProperty()
    @IsArray()
    photos: string[];

    @ApiProperty()
    @IsString()
    remark: string;
    
    @ApiProperty()
    @IsNumber()
    grade: number;
}
