import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFiles } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("testimage")
@ApiBearerAuth()
@Controller('testimage')
export class TestImageController {

    @Post()
    @ApiOperation({ summary: 'Upload files' })
    update(@Body() body:any, @UploadedFiles() files: any) {
        return {
            "body": body,
            "files": files
        }
    }
}