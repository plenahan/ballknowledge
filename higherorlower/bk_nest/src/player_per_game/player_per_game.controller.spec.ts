import { Test, TestingModule } from '@nestjs/testing';
import { PlayerPerGameController } from './player_per_game.controller';
import { PlayerPerGameService } from './player_per_game.service';

describe('PlayerPerGameController', () => {
  let controller: PlayerPerGameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayerPerGameController],
      providers: [PlayerPerGameService],
    }).compile();

    controller = module.get<PlayerPerGameController>(PlayerPerGameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
