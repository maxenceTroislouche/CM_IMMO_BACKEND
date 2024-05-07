import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EstateAgentsService } from '../estateAgents/estateAgents.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private estateAgentsService: EstateAgentsService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const agent = await this.estateAgentsService.findOneByUsername(username);
    if (!(await AuthService.verify(password, agent?.password))) {
      throw new UnauthorizedException();
    }

    const payload = { sub: agent.id, username: agent.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  static async hash(password: string) {
    return await argon2.hash(password);
  }

  static async verify(plainTextPassword: string, hashedPassword: string) {
    return await argon2.verify(hashedPassword, plainTextPassword);
  }
}
