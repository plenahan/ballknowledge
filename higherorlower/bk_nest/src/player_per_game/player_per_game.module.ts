import { Module } from '@nestjs/common';
import { PlayerPerGameService } from './player_per_game.service';
import { PlayerPerGameController } from './player_per_game.controller';

@Module({
  controllers: [PlayerPerGameController],
  providers: [PlayerPerGameService],
})
export class PlayerPerGameModule {}
