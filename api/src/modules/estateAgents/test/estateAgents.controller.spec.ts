import { Test, TestingModule } from '@nestjs/testing';
import { EstateAgentsController } from '../estateAgents.controller';
import { EstateAgentsService } from '../estateAgents.service';

describe('AgentsController', () => {
  let controller: EstateAgentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateAgentsController],
      providers: [EstateAgentsService],
    }).compile();

    controller = module.get<EstateAgentsController>(EstateAgentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
