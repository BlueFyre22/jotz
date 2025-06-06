import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  activeJot = null

  jotz = [
    new Jot({
      title: 'Flexy bootstrap',
      color: "#008000",
      body: "Bootstrap and flexbox are not my friends.",
      createdAt: '8/22/1987',
      updatedAt: ''
    }),
    new Jot({
      title: 'CSS',
      color: "#0087f5",
      body: "CSS is ok, it makes sense that it does the same stuff everytime",
      createdAt: '5/16/2021',
      updatedAt: ''
    }),
    new Jot({
      title: 'Javascript is fun!',
      color: "#008000",
      body: "Javascript is logical and follows rules, making it easier to learn",
      createdAt: '11/30/1998',
      updatedAt: ''
    }),
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())