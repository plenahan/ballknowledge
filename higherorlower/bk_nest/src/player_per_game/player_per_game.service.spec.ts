import { Test, TestingModule } from '@nestjs/testing';
import { PlayerPerGameService } from './player_per_game.service';

describe('PlayerPerGameService', () => {
  let service: PlayerPerGameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerPerGameService],
    }).compile();

    service = module.get<PlayerPerGameService>(PlayerPerGameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
