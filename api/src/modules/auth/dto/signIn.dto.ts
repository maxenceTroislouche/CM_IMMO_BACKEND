import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator"

export class SignInDto {

    @ApiProperty({
        description:"The username of an estate agent",
        example:"admin"
    })
    @IsString()
    username: string;
    
    @ApiProperty({
        description:"The password corresponding to the username",
        type:String,
        example:"admin"
    })
    @IsString()
    password:string;
}
