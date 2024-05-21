import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class FindAllEstateAgentDto {
    @ApiProperty()
    @IsString()
    username: string;
}
