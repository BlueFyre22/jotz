import { AppState } from "../AppState.js"
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




  // deleteJot(jotID){
  //   const jotz = AppState.jotz
  //   const
  // }

  setActiveJot(passedjotId) {
    const selectedJot = AppState.jotz.find((jot) => jot.id == passedjotId)
    selectedJot.updatedAt = new Date()
    AppState.activeJot = selectedJot
  }

  saveActiveJot(bodyUpdate, newUpdatedAt) {
    AppState.activeJot.body = bodyUpdate
    AppState.activeJot.updatedAt = newUpdatedAt
    console.log("updated active jot's body and updated at time")

    AppState.activeJot
    this.saveJotz() // not sure this is needed
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


}

export const jotzService = new JotzService