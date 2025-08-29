import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerPerGameDto } from './create-player_per_game.dto';

export class UpdatePlayerPerGameDto extends PartialType(CreatePlayerPerGameDto) {}
