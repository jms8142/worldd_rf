import Scene from './index'
import { ActorManager } from '../utils/ActorManager'

export class levelScene extends Scene {
	constructor(){
		super()
		this.name = 'openingScene'
		this.gameboard = ActorManager.getActor('gameboard')
	}

	stage() {

	}

	start() {
		this.gameboard.createTileMap()
	}

}
