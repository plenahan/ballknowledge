import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerPerGameService } from './player_per_game.service';
import { CreatePlayerPerGameDto } from './dto/create-player_per_game.dto';
import { UpdatePlayerPerGameDto } from './dto/update-player_per_game.dto';

@Controller('player-per-game')
export class PlayerPerGameController {
  constructor(private readonly playerPerGameService: PlayerPerGameService) {}

  @Get()
  findAll() {
    return this.playerPerGameService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: number) {
    return this.playerPerGameService.findOne(id);
  }

  @Get('player/:player_id')
  findAllByPlayerId(@Param('player_id') player_id: string) {
    return this.playerPerGameService.findAllByPlayerId(player_id);
  }
}
