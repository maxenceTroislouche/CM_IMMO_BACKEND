import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateSignatureDto {
    @ApiProperty()
    @IsNumber()
    inventoryId: number;

    @ApiProperty()
    @IsString()
    type: string;

    @ApiProperty()
    @IsString()
    image: string;
}