import { ApiProperty } from "@nestjs/swagger";

export class CreateEstateAgentDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password:string;
}
