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
    let auth = new Auth();
    auth.utilisateur = createAuthDto.username;
    auth.mot_de_passe = createAuthDto.password;

    return this.authRepository.save(auth);
  }

  findAll() {
    return this.authRepository.find();
  }

  findOne(id: number) {
    return this.authRepository.find();
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    let auth = new Auth();
    auth.utilisateur = updateAuthDto.username;
    auth.mot_de_passe = updateAuthDto.password;
    return this.authRepository.update(id,auth);
  }

  remove(id: number) {  
    return this.authRepository.delete(id);
  }
}
