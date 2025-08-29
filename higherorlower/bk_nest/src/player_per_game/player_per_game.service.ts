import { Injectable } from '@nestjs/common';
import { CreatePlayerPerGameDto } from './dto/create-player_per_game.dto';
import { UpdatePlayerPerGameDto } from './dto/update-player_per_game.dto';

@Injectable()
export class PlayerPerGameService {
  create(createPlayerPerGameDto: CreatePlayerPerGameDto) {
    return 'This action adds a new playerPerGame';
  }

  findAll() {
    return `This action returns all playerPerGame`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playerPerGame`;
  }

  update(id: number, updatePlayerPerGameDto: UpdatePlayerPerGameDto) {
    return `This action updates a #${id} playerPerGame`;
  }

  remove(id: number) {
    return `This action removes a #${id} playerPerGame`;
  }
}
