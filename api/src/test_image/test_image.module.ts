import { Module } from '@nestjs/common';
import { TestImageController } from './test_image.controller';

@Module({})
export class TestImageModule {
    controllers: [TestImageController]
}
