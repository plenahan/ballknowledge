import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerPerGameModule } from './player_per_game/player_per_game.module';
import * as dotenv from 'dotenv';
import { PlayerPerGame } from './player_per_game/entities/player_per_game.entity';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: process.env.PG_PASSWORD,
      username: process.env.PG_USERNAME,
      entities: [PlayerPerGame],
      database: process.env.PG_DATABASE,
      synchronize: true,
      logging: true,
    }), PlayerPerGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
