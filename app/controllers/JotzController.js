import { AppState } from "../AppState.js"
import { jotzService } from "../services/JotzService.js"
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js"


export class JotzController {
  constructor() {
    console.log("Controller is running")
    this.drawLittleJotz()

    AppState.on("jotz", this.drawLittleJotz)
    AppState.on('jotz', jotzService.saveJotz)

    jotzService.loadJotzOnPageLoad()


  }


  drawLittleJotz() {
    const jotz = AppState.jotz
    let smallCardListing = ""
    jotz.forEach(jot => smallCardListing += jot.smallCardTemplate)
    // console.log("Drawing Jotz", smallCardListing)
    setHTML('sm-card-listing', smallCardListing)
  }

  submitNewJot() {
    event.preventDefault()
    const formElem = event.target
    const jotData = getFormData(formElem)
    console.log("Submitting New Jot")

    jotzService.createJot(jotData)

  }

  setActiveJot(jotId) {
    console.log("Set Active case file started")
    jotzService.setActiveJot(jotId)
    this.drawActiveJot()
  }

  drawActiveJot() {
    console.log("Drawing Active Jot - hopefully")
    const activeJot = AppState.activeJot
    setHTML('active-jot-area', activeJot.activeJotTemplate)
  }

  saveActiveJot() {
    event.preventDefault()
    console.log("Saving active Jot")
    const form = document.getElementById("active-jot-form")
    const activeJotFormData = getFormData(form)
    console.log("active form data hopefully ==>", activeJotFormData)
    jotzService.saveActiveJot(activeJotFormData.body, activeJotFormData.updatedAt)
  }

}