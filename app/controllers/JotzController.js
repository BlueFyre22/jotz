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
    this.drawJotzNumber()
    AppState.on('activeJot', this.drawActiveJot)
    AppState.on('jotz', this.drawJotzNumber)



  }

  drawJotzNumber() {
    const jotzNumber = AppState.jotz.length
    console.log("jotzNumber", jotzNumber)
    setHTML('little-jotz-total', `${jotzNumber} Jotz`)
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
    //@ts-ignore
    formElem.reset()
  }

  setActiveJot(jotId) {
    console.log("Set Active case file started")
    jotzService.setActiveJot(jotId)
    // this.drawActiveJot()
  }

  drawActiveJot() {
    console.log("Drawing Active Jot - hopefully")
    const activeJot = AppState.activeJot
    setHTML('active-jot-area', activeJot.activeJotTemplate)
  }

  saveActiveJot() {
    // event.preventDefault()
    console.log("Saving active Jot")
    const form = document.getElementById("active-jot-form")
    const activeJotFormData = getFormData(form)
    console.log("active form data hopefully ==>", activeJotFormData)

    jotzService.saveActiveJot(activeJotFormData.body, activeJotFormData.updatedAt)
    this.drawLittleJotz()
  }

  deleteJot(jotId) {
    const confirm = window.confirm("Are you sure you want to PERMANENTLY get rid of this awesome Jot!?")
    if (!confirm) { return }

    console.log("Deleting the Jot with ID of ", jotId)
    jotzService.deleteJotz(jotId)



  }
}