import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsString } from "class-validator";

export class CreatePropertyDto{
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    propertyType: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsNumber()
    postalCode: number;

    @ApiProperty()
    @IsNumber()
    progress: number;

    @ApiProperty()
    @IsNumber()
    inventoryId: number;

    @ApiProperty()
    @IsBoolean()
    isStartingInventory: boolean;

    @ApiProperty()
    @IsNumber()
    contractId: number;

    @ApiProperty()
    @IsNumber()
    numberOfRooms: number;

    @ApiProperty()
    @IsNumber()
    streetNumber: number;

    @ApiProperty()
    @IsString()
    streetName: string;

    @ApiProperty()
    @IsNumber()
    floor: number;

    @ApiProperty()
    @IsNumber()
    flatNumber: number;
  
    @ApiProperty()
    @IsNumber()
    longitude: number;

    @ApiProperty()
    @IsNumber()
    latitude: number;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsArray()
    contracts: any[];

    @ApiProperty()
    @IsArray()
    photos: string[];
}
