import THREE from "../factories/three"

export default class Scene {
	static getSceneFromLabel(label) {
		return new scenes[label]
	}

	constructor() {
		this.props = []
		this.scene = new THREE.Scene()
	}

	getScene() {
		return this.scene
	}

	stage() {
		//console.dir(this)
		// console.log(this.__proto__)
	}

}
