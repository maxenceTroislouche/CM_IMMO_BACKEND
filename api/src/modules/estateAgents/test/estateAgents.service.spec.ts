import { Test, TestingModule } from '@nestjs/testing';
import { EstateAgentsService } from '../estateAgents.service';

describe('AgentsService', () => {
  let service: EstateAgentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstateAgentsService],
    }).compile();

    service = module.get<EstateAgentsService>(EstateAgentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
