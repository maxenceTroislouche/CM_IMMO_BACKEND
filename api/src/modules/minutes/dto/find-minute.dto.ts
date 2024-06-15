import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsArray, IsOptional, IsInt } from "class-validator";

export class FindMinuteDto {

    @ApiProperty()
    @IsNumber()
    id_edl: number;

    @ApiProperty()
    @IsNumber()
    id_element: number;

    @ApiProperty({ type: [Number], description: 'Array of photo IDs' })
    @IsArray()
    @IsNumber({}, { each: true })
    photos: number[];

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    remarque?: string;

    @ApiProperty({ required: false })
    @IsInt()
    @IsOptional()
    note?: number;
}
