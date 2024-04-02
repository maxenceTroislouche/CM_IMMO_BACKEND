import { PartialType } from '@nestjs/mapped-types';
import { CreateEstateAgentDto } from './create-estateAgent.dto';

export class UpdateEstateAgentDto extends PartialType(CreateEstateAgentDto) {
}

