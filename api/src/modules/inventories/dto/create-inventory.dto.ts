import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";

export class FindOneInventoryDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    propertyId: number;

    @ApiProperty()
    rooms: FindOneInventoryRoomDto[];
}

export class FindOneInventoryRoomDto {
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
    elements: FindOneInventoryElementDto[];
}

export class FindOneInventoryElementDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    parentElementId: number;

    @ApiProperty()
    @IsString()
    elementType: string;

    @ApiProperty()
    @IsNumber()
    number: number;

    @ApiProperty()
    description: any;
}
