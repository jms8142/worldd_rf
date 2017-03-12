import THREE from "../factories/three"
import { GAME_WIDTH, GAME_HEIGHT, DOM_CONTAINER } from '../constants'

export default class Scene {
	static getSceneFromLabel(label) {
		return new scenes[label]
	}

	constructor(renderer, light = this.DefaultLight, camera = this.DefaultCam) {
		this.props = []
		this.scene = new THREE.Scene()
		this.light = light
		this.camera = camera
		//console.dir(renderer)
		this.renderer = renderer

		//add and position items in scene
		this.stage()

	}

	getScene() {
		return this.scene
	}

	stage() {
		this.scene.add(this.light)

		this.camera.position.z = 80
		this.scene.add(this.camera)

		//setup actors
		let material = new THREE.MeshStandardMaterial({
            color: 0x7cb6d4,
			wireframe: true
        })

        this.sphere = new THREE.Mesh(
            new THREE.CylinderBufferGeometry(
                2,
                2,
                .5,
				16
			),
            material)
		//console.log(-(GAME_WIDTH / 2) + 240)
        this.sphere.name = "sphere";
		this.sphere.rotation.x = 5
		console.dir(this.sphere)
        this.scene.add(this.sphere)

	}

	render() {
		this.sphere.rotation.z += 0.005;

		this.renderer.render(this.scene,this.camera)

		requestAnimationFrame(this.render.bind(this))
	}

	get DefaultCam() {
		return new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            1000
        )

		/*
		return new THREE.OrthographicCamera(
			GAME_WIDTH / - 2,
			GAME_WIDTH / 2,
			GAME_HEIGHT / 2,
			GAME_HEIGHT / - 2,
			1,
			1000
		)
		*/
	}

	get DefaultLight() {
		return new THREE.AmbientLight(0xffffff)
	}

	get DefaultPointLight() {
		return new THREE.PointLight(0xffffff)
	}



}
