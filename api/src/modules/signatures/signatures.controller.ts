import { Body, Controller, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { SignaturesService } from "./signatures.service";
import { CreateSignatureDto } from "./dto/create-signature.dto";

@ApiTags("Signatures")
@ApiBearerAuth()
@Controller('signatures')
export class SignaturesController {
  constructor(private readonly signaturesService: SignaturesService) {}

  @Post()
  async create(@Body() createSignatureDto: CreateSignatureDto) {
    return await this.signaturesService.create(createSignatureDto); 
  }
}