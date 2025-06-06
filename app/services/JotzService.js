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

  // deleteJot(jotID){
  //   const jotz = AppState.jotz
  //   const
  // }

  setActiveJot(passedjotId) {
    const selectedJot = AppState.jotz.find((jot) => jot.id == passedjotId)
    selectedJot.updatedAt = new Date()
    AppState.activeJot = selectedJot
  }

}

export const jotzService = new JotzService