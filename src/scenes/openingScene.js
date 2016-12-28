import Scene from './index'
import THREE from "../factories/three"


export class openingScene extends Scene {
	constructor(){
		super()
		this.name = 'openingScene'

		// this.setProps()
		return
	}

	stage() {
		const textureLoader = new THREE.TextureLoader()
		textureLoader.load(
			'grass.png',
			(texture) => {
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				texture.repeat.set(25, 25)
			}
		)
		//const grassTexture =
		//console.dir(grassTexture)
		//grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping
        //grassTexture.repeat.set(25, 25)
	}
}
