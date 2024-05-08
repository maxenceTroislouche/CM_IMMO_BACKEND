import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";

export class FindAllPropertiesDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    ville: number;

    @ApiProperty()
    @IsString()
    nomProprietaire: string;

    @ApiProperty()
    @IsString()
    prenomProprietaire: string;

    @ApiProperty()
    @IsString()
    typeBien: string;

    /*
    @ApiProperty()
    @IsNumber()
    pourcentageAvancement: number;
    */
   
    @ApiProperty()
    @IsArray()
    photos: string[];
}
