import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EstateAgentsService } from '../estateAgents/estateAgents.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: EstateAgentsService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<{access_token: string}> {
    const agent = await this.usersService.findOneByUsername(username);
    if (agent?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub : agent.id, username: agent.username};

    return {
      access_token : await this.jwtService.signAsync(payload)
    }
  }

}
