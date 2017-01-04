import { GAME_COLS, GAME_ROWS } from '../constants'

export default class GameBoard {

	constructor() {
		this.tilemap = new Array(GAME_COLS)
		this.cell = {
			val: 0,
			active: false
		}
		console.log('gameboard constructor')
	}

	createTileMap() {
		this.tilemap.fill((new Array(GAME_ROWS)).fill(this.cell))
		return this.tilemap
	}
}
