import { Module } from '@nestjs/common';
import { TestImageController } from './testimage.controller';

@Module({})
export class TestImageModule {
    controllers: [TestImageController]
}