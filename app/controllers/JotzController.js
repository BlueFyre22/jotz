import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"


export class JotzController {
  constructor() {
    console.log("Controller is running")
    this.drawLittleJotz()

  }


  drawLittleJotz() {
    const jotz = AppState.jotz
    let smallCardListing = ""
    jotz.forEach(jot => smallCardListing += jot.smallCardTemplate)
    setHTML('sm-card-listing', smallCardListing)
  }


}