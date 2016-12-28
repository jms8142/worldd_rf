export default class Scene {
	static getSceneFromLabel(label) {
		return new scenes[label]
	}

	constructor() {
		this.props = []
	}

	stage() {
		//console.dir(this)
		// console.log(this.__proto__)
	}

}
