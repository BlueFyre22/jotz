import { JotzController } from "./controllers/JotzController.js"


class App {

  jotzController = new JotzController()

}

window['app'] = new App()


