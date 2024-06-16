import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";
import { FindRoomDto } from "./find-room.dto";

export class FindInventoryDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    propertyId: number;

    @ApiProperty()
    rooms: FindRoomDto[];
}


