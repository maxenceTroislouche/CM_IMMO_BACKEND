import { Module } from '@nestjs/common';
import { TestImageController } from './testimage.controller';

@Module({controllers: [TestImageController]})
export class TestImageModule {
    
}