import { Controller, Post, Body } from '@nestjs/common';
import { AiService } from './ai.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateAiDto } from './dto/create-ai.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Post()
  @ApiOperation({ summary: 'Generate text from prompt' })
  create(@Body() createAiDto: CreateAiDto): Promise<string> {
    return this.aiService.generateText(createAiDto.prompt);
  }
}
