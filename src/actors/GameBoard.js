import { GAME_COLS, GAME_ROWS, COINS } from '../constants'
import Coin from './Coin'
import THREE from "../factories/three"


export default class GameBoard {

	constructor() {
		this.tilemap = new Array(GAME_COLS)
		this.cell = {
			val: 0,
			active: false
		}
	}

	createTileMap() {
		this.tilemap.fill((new Array(GAME_ROWS)).fill(this.cell))
		return this.tilemap
	}

	populateRandom() {
		for(let col_index = 0; col_index < GAME_COLS; col_index++){
			for(let row_index = 0; row_index < GAME_ROWS; row_index++){
				const denomination = COINS[Math.floor(Math.random() * COINS.length)]
				this.tilemap[col_index][row_index] = new Coin(denomination)
			}
		}
	}

	render(scene) {
		const material = new THREE.MeshBasicMaterial({
			color: 0xff0000,
			wireframe: true
		})

		const sphere = new THREE.Mesh(
			new THREE.SphereGeometry(
				15,
				50,
				50),
			material)
		//console.dir(scene)
		scene.add(sphere)
	}
}
