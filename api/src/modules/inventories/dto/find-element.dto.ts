import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class FindElementDto {
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
