// import { openingScene } from './scenes/openingScene'
import { levelScene } from './scenes/levelScene'
import { GAME_WIDTH, GAME_HEIGHT, DOM_CONTAINER } from './constants'
import THREE from "./factories/three"

class App {

    constructor() {}

    init(){
        this.currentScene = new levelScene(this.addRenderer())
        this.currentScene.render()
        this.currentScene.start()
    }

    addRenderer() {
        this.renderer = new THREE.WebGLRenderer()
        // console.log(GAME_WIDTH, GAME_HEIGHT)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        //this.renderer.setClearColor(0xE0EEEE)
        document.getElementById(DOM_CONTAINER).appendChild(this.renderer.domElement)

        return this.renderer
    }

    addSceneToRender() {

    }


}

export default App;
