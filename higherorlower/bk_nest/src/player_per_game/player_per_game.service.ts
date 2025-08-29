import { Injectable } from '@nestjs/common';
import { CreatePlayerPerGameDto } from './dto/create-player_per_game.dto';
import { UpdatePlayerPerGameDto } from './dto/update-player_per_game.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlayerPerGame } from './entities/player_per_game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerPerGameService {
  constructor(@InjectRepository(PlayerPerGame)
  private playerPerGameRepository: Repository<PlayerPerGame>,
  ) {}

  findAll() {
    return this.playerPerGameRepository.find();
  }

  findOne(id: number) {
    return this.playerPerGameRepository.findOneBy({ id });
  }

  findAllByPlayerId(player_id: string) {
    return this.playerPerGameRepository.findBy({ player_id });
  }
}
