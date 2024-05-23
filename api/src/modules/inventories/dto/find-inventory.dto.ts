import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsNumber } from "class-validator";
import { FindRoomDto } from "./find-room.dto";
import { EstateAgent } from "src/modules/estateAgents/entities/estateAgent.entity";

export class FindInventoryDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsNumber()
    propertyId: number;

    @ApiProperty()
    @IsNumber()
    contractId: number;

    @ApiProperty()
    estateAgent: EstateAgent;
    
    @ApiProperty()
    @IsBoolean()
    isStartingInventory: boolean;

    @ApiProperty()
    @IsDate()
    date:Date;
    
    @ApiProperty()
    @IsNumber()
    progress: number;
    
    @ApiProperty()
    rooms: FindRoomDto[];
}


