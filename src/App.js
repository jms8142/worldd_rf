// import { openingScene } from './scenes/openingScene'
import { levelScene } from './scenes/levelScene'
import { GAME_WIDTH, GAME_HEIGHT, DOM_CONTAINER } from './constants'
import THREE from "./factories/three"

class App {

    constructor() {
        this.camera =  new THREE.PerspectiveCamera(
            35,
            GAME_WIDTH / GAME_HEIGHT,
            1,
            1000
        )
        this.light= new THREE.AmbientLight(0xffffff)
        this.light2= new THREE.PointLight(0xffffff)

        this.camera.position.set(0, 20, 200)
        this.camera.rotation.set(0, 0, 0)
    }

    init(){
        this.addRenderer()

        this.currentScene = new levelScene()
        this.currentScene.getScene().add(this.camera)
        this.currentScene.getScene().add(this.light)
        this.currentScene.stage()
        this.render()
        this.currentScene.start()
    }

    addRenderer() {
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(GAME_WIDTH, GAME_HEIGHT)
        this.renderer.setClearColor(0xE0EEEE)
        this.appendToDOM(this.renderer.domElement)
    }



    render() {
        this.renderer.render(
            this.currentScene.getScene(),
            this.camera
        )
    }

    appendToDOM(element) {
        document.getElementById(DOM_CONTAINER).appendChild(element)
    }

}

export default App;
