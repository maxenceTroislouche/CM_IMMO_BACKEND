import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";
import { FindElementDto } from "./find-element.dto";

export class FindRoomDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    roomType: string;

    @ApiProperty()
    @IsString()
    roomRole: string;

    @ApiProperty()
    @IsNumber()
    number: number;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNumber()
    area: number;

    @ApiProperty()
    @IsArray()
    elements: FindElementDto[];
}