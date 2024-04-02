import { ApiProperty } from "@nestjs/swagger";

export class CreateAgentDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password:string;
}
