import THREE from "../factories/three"

export default class Scene {
	static getSceneFromLabel(label) {
		return new scenes[label]
	}

	constructor(light = this.DefaultLight, camera = this.DefaultCam) {
		this.props = []
		this.scene = new THREE.Scene()
		this.light = light
		this.camera = camera

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
		let material = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        })

        let sphere = new THREE.Mesh(
            new THREE.SphereGeometry(
                10,
                25,
                25),
            material)

        sphere.name = "sphere";
        this.scene.add(sphere)

	}

	render(renderer) {
		renderer.render(this.scene,this.camera)
	}

	get DefaultCam() {
		return new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            1000
        )
	}

	get DefaultLight() {
		return new THREE.AmbientLight(0xffffff)
	}

	get DefaultPointLight() {
		return new THREE.PointLight(0xffffff)
	}



}
