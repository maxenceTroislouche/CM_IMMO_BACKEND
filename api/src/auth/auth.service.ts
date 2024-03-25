import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

  @InjectRepository(Auth)
  private authRepository: Repository<Auth>;

  async create(createAuthDto: CreateAuthDto) {
    console.log('service');
    let auth = new Auth();
    auth.utilisateur = createAuthDto.username;
    auth.mot_de_passe = createAuthDto.password;

    auth = await this.authRepository.save(auth);
    return auth;
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
