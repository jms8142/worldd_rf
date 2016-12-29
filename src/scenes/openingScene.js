import Scene from './index'
import THREE from "../factories/three"
import { GAME_WIDTH, GAME_HEIGHT, DOM_CONTAINER } from '../constants'


export class openingScene extends Scene {
	constructor(){
		super()
		this.name = 'openingScene'
		this.addGround.bind(this)
	}

	stage() {

	
	}

	addGround() {
		console.log('floop')
		console.log(this.ground)
		this.scene.add(this.ground)
	}
}
