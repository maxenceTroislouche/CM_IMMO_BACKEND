import { Injectable } from '@nestjs/common';
import { CreateEstateAgentDto } from './dto/create-estateAgent.dto';
import { UpdateEstateAgentDto } from './dto/update-estateAgent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EstateAgent } from './entities/estateAgent.entity';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { Public } from '../auth/decorators/public.decorator';
import { FindAllEstateAgentDto } from './dto/findall-estateAgent.dto';

@Injectable()
export class EstateAgentsService {
  
  @InjectRepository(EstateAgent)
  private agentRepository: Repository<EstateAgent>;

  @Public()
  async create(createAgentDto: CreateEstateAgentDto) {
    let agent = new EstateAgent();
    agent.username = createAgentDto.username;
    agent.password = await AuthService.hash(createAgentDto.password);
    return this.agentRepository.insert(agent);
  }

  async findAll() {
    let estateAgents = await this.agentRepository.find();
    let returnArray = [];
    for (let agent of estateAgents) {
      let agentDto = new FindAllEstateAgentDto();
      agentDto.username = agent.username;

      returnArray.push(agentDto);
    }
    return returnArray;
  }

  findOneById(id: number) {
    return this.agentRepository.findOneBy({id:id});
  }

  findOneByUsername(username: string) {
    return this.agentRepository.findOneBy({username:username});
  }

  update(id: number, updateAgentDto: UpdateEstateAgentDto) {
    let agent = new EstateAgent();
    agent.username = updateAgentDto.username;
    agent.password = updateAgentDto.password;
    return this.agentRepository.update(id,agent);
  }

  remove(id: number) {  
    return this.agentRepository.delete(id);
  }
}
