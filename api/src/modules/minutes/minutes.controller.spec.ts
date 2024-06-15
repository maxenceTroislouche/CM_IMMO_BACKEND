import { Test, TestingModule } from '@nestjs/testing';
import { MinutesController } from './minutes.controller';
import { MinutesService } from './minutes.service';

describe('MinutesController', () => {
  let controller: MinutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinutesController],
      providers: [MinutesService],
    }).compile();

    controller = module.get<MinutesController>(MinutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
