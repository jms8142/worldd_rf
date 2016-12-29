import gameboard from '../actors/GameBoard'

export class ActorManager {

	static getActor(actor) {
		if(!this.actors) {
			this.actors = new Map()
		}

		if(!this.actors.get(actor)){
			this.actors.set(actor, new gameboard())
		}

		return this.actors.get(actor)


	}
}
