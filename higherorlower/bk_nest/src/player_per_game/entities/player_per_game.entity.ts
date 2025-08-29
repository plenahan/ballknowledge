import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('player_per_game')
export class PlayerPerGame {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	season: number;

	@Column({ nullable: true })
	lg: string;

	@Column({ nullable: true })
	player: string;

	@Column({ nullable: true })
	player_id: string;

	@Column({ nullable: true })
	age: number;

	@Column({ nullable: true })
	team: string;

	@Column({ nullable: true })
	pos: string;

	@Column({ nullable: true })
	g: number;

	@Column({ nullable: true })
	gs: number;

	@Column('float', { nullable: true })
	mp_per_game: number;

	@Column('float', { nullable: true })
	fg_per_game: number;

	@Column('float', { nullable: true })
	fga_per_game: number;

	@Column('float', { nullable: true })
	fg_percent: number;

	@Column('float', { nullable: true })
	x3p_per_game: number;

	@Column('float', { nullable: true })
	x3pa_per_game: number;

	@Column('float', { nullable: true })
	x3p_percent: number;

	@Column('float', { nullable: true })
	x2p_per_game: number;

	@Column('float', { nullable: true })
	x2pa_per_game: number;

	@Column('float', { nullable: true })
	x2p_percent: number;

	@Column('float', { nullable: true })
	e_fg_percent: number;

	@Column('float', { nullable: true })
	ft_per_game: number;

	@Column('float', { nullable: true })
	fta_per_game: number;

	@Column('float', { nullable: true })
	ft_percent: number;

	@Column('float', { nullable: true })
	orb_per_game: number;

	@Column('float', { nullable: true })
	drb_per_game: number;

	@Column('float', { nullable: true })
	trb_per_game: number;

	@Column('float', { nullable: true })
	ast_per_game: number;

	@Column('float', { nullable: true })
	stl_per_game: number;

	@Column('float', { nullable: true })
	blk_per_game: number;

	@Column('float', { nullable: true })
	tov_per_game: number;

	@Column('float', { nullable: true })
	pf_per_game: number;

	@Column('float', { nullable: true })
	pts_per_game: number;
}
