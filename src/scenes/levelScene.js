import Scene from './index'
import { ActorManager } from '../utils/ActorManager'
import THREE, * as ThreeLIB from '../factories/three'


export class levelScene extends Scene {

	constructor(){
		super()
		this.name = 'openingScene'
		this.gameboard = ActorManager.getActor('gameboard')
	}



	stage() {
		super.stage()
	}

	start() {
		this.gameboard.createTileMap()
		//temp for develop
		this.gameboard.populateRandom()
		this.gameboard.render(this.getScene())
	}

}
