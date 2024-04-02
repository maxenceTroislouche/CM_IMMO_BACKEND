import { Injectable } from '@nestjs/common';
import { CreateEstateAgentDto } from './dto/create-estateAgent.dto';
import { UpdateEstateAgentDto } from './dto/update-estateAgent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EstateAgent } from './entities/estateAgent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstateAgentsService {
  
  @InjectRepository(EstateAgent)
  private agentRepository: Repository<EstateAgent>;

  async create(createAgentDto: CreateEstateAgentDto) {
    let agent = new EstateAgent();
    agent.username = createAgentDto.username;
    agent.password = createAgentDto.password;

    return this.agentRepository.save(agent);
  }

  findAll() {
    return this.agentRepository.find();
  }

  findOneById(id: string) {
    return this.agentRepository.findOneBy({id:id});
  }

  findOneByUsername(username: string) {
    return this.agentRepository.findOneBy({username:username});
  }

  update(id: string, updateAgentDto: UpdateEstateAgentDto) {
    let agent = new EstateAgent();
    agent.username = updateAgentDto.username;
    agent.password = updateAgentDto.password;
    return this.agentRepository.update(id,agent);
  }

  remove(id: string) {  
    return this.agentRepository.delete(id);
  }
}
