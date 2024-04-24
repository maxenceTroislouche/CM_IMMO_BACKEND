import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator"

export class SignInDto {

    @ApiProperty({
        description:"The username of an estate agent",
        example:"emichka"
    })
    @IsString()
    username: string;
    
    @ApiProperty({
        description:"The password corresponding to the username",
        type:String,
        example:"LjDmNDGJSEyNTiw8JMG@qMeA3#S&Scr5nnU4#bQz^Jn4zmf#DgN#^c8MrM&sLevy@U$Hv*BH*J#vth7wHfvkpfUgpUswo48aCj9Z^sfm9LkNFFga2oK$nn8fqUCJCVEH"
    })
    @IsString()
    password:string;
}
