import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AgentsService } from '../agents/agents.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: AgentsService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<{access_token: string}> {
    const agent = await this.usersService.findOneByUsername(username);
    if (agent?.mot_de_passe !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub : agent.id, username: agent.utilisateur};

    return {
      access_token : await this.jwtService.signAsync(payload)
    }
  }

}
