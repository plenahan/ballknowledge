import { Module } from '@nestjs/common';
import { PlayerPerGameService } from './player_per_game.service';
import { PlayerPerGameController } from './player_per_game.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerPerGame } from './entities/player_per_game.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PlayerPerGame])],
  controllers: [PlayerPerGameController],
  providers: [PlayerPerGameService],
})
export class PlayerPerGameModule {}
