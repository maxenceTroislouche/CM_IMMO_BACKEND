import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";

export class FindOneReviewDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    propertyId: number;

    @ApiProperty()
    rooms: FindOneReviewRoomDto[];
}

export class FindOneReviewRoomDto {
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
    elements: FindOneReviewElementDto[];
}

export class FindOneReviewElementDto {
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
