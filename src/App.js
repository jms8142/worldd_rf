import { openingScene } from './scenes/openingScene'
import { GAME_WIDTH, GAME_HEIGHT, DOM_CONTAINER } from './constants'
import THREE from "./factories/three"

class App {

    constructor() {
    }

    init(){
        this.mainCamera = this.addMainCamera()

        this.currentScene = new openingScene()
        this.currentScene.stage()
        this.render()
    }

    addRenderer() {
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(GAME_WIDTH, GAME_HEIGHT)
        this.renderer.setClearColor(0xE0EEEE)
        this.appendToDOM(this.renderer.domElement)
    }

    addMainCamera() {
        return new THREE.PerspectiveCamera(
            35,
            GAME_WIDTH / GAME_HEIGHT,
            1,
            1000
        );
    }

    render() {

    }

    appendToDOM(element) {
        document.getElementByID(DOM_CONTAINER).appendChild(element)
    }

}

export default App;
