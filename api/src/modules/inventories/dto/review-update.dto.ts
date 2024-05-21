import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { FindOneReviewDto } from './review-findone.dto';

export class UpdateEstateAgentDto extends PartialType(FindOneReviewDto) {
}