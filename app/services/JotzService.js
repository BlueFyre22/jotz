import { AppState } from "../AppState.js"
import { JotzController } from "../controllers/JotzController.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"



class JotzService {

  createJot(jotData) {
    console.log('🌋📒', jotData)
    const newJot = new Jot(jotData)
    console.log('New Jot', newJot)
    const jotArray = AppState.jotz
    jotArray.push(newJot)
  }


  setActiveJot(passedjotId) {
    const selectedJot = AppState.jotz.find((jot) => jot.id == passedjotId)
    selectedJot.updatedAt = new Date()
    AppState.activeJot = selectedJot
  }

  saveActiveJot(bodyUpdate, newUpdatedAt) {
    AppState.activeJot.body = bodyUpdate
    AppState.activeJot.updatedAt = newUpdatedAt
    console.log("updated active jot's body and updated at time", AppState.activeJot.updatedAt)

    this.saveJotz()

  }

  saveJotz() {
    saveState('jotz', AppState.jotz)
  }

  loadJotzOnPageLoad() {
    const jotzFromLocalStorage = loadState('jotz', [Jot])
    if (jotzFromLocalStorage.length == 0) {
      AppState.jotz = AppState.jotz
    } else {
      AppState.jotz = jotzFromLocalStorage

    }
  }

  deleteJotz(jotId) {
    const jotz = AppState.jotz
    const jotIndex = jotz.findIndex(jot => jot.id == jotId)
    console.log("trying to remove index of", jotIndex)
    jotz.splice(jotIndex, 1)

  }

}

export const jotzService = new JotzService