import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerPerGameService } from './player_per_game.service';
import { CreatePlayerPerGameDto } from './dto/create-player_per_game.dto';
import { UpdatePlayerPerGameDto } from './dto/update-player_per_game.dto';

@Controller('player-per-game')
export class PlayerPerGameController {
  constructor(private readonly playerPerGameService: PlayerPerGameService) {}

  @Post()
  create(@Body() createPlayerPerGameDto: CreatePlayerPerGameDto) {
    return this.playerPerGameService.create(createPlayerPerGameDto);
  }

  @Get()
  findAll() {
    return this.playerPerGameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerPerGameService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerPerGameDto: UpdatePlayerPerGameDto) {
    return this.playerPerGameService.update(+id, updatePlayerPerGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerPerGameService.remove(+id);
  }
}
