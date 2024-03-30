import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
    @Optional()
    @ApiProperty()
    username: string;

    @Optional()
    @ApiProperty()
    password:string;
}

