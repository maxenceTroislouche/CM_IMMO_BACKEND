import { Injectable } from '@nestjs/common';
import { CreateAgentDto } from './dto/create-agent.dto';
import { UpdateAgentDto } from './dto/update-agent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Agent } from './entities/agent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgentsService {
  
  @InjectRepository(Agent)
  private agentRepository: Repository<Agent>;

  async create(createAgentDto: CreateAgentDto) {
    let agent = new Agent();
    agent.utilisateur = createAgentDto.username;
    agent.mot_de_passe = createAgentDto.password;

    return this.agentRepository.save(agent);
  }

  findAll() {
    return this.agentRepository.find();
  }

  findOneById(id: string) {
    return this.agentRepository.findOneBy({id:id});
  }

  findOneByUsername(username: string) {
    return this.agentRepository.findOneBy({utilisateur:username});
  }

  update(id: string, updateAgentDto: UpdateAgentDto) {
    let agent = new Agent();
    agent.utilisateur = updateAgentDto.username;
    agent.mot_de_passe = updateAgentDto.password;
    return this.agentRepository.update(id,agent);
  }

  remove(id: string) {  
    return this.agentRepository.delete(id);
  }
}
