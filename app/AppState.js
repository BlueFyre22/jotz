import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /**@type {Jot} */
  activeJot = null

  jotz = [
    new Jot({
      title: 'HTML',
      color: "#008000",
      body: "HTML is the basic structure of a webpage. It uses tags like h1, p, and div to organize content. Every element in HTML can have attributes to provide extra information.",
      createdAt: '8/22/1987',
      updatedAt: '8/22/1987'
    }),
    new Jot({
      title: 'CSS',
      color: "#0087f5",
      body: "CSS controls the look and layout of web pages. You can use CSS to change colors, fonts, spacing, and more. CSS can be written inline, in the <style> tag, or in external stylesheets.",
      createdAt: '12/19/1988',
      updatedAt: '5/16/2021'
    }),
    new Jot({
      title: 'Javascript is fun!',
      color: "#cc23fb",
      body: "JavaScript adds interactivity and logic to websites. You can use JavaScript to respond to clicks, form input, or data changes. It runs in the browser and works with HTML and CSS to create dynamic pages",
      createdAt: '4/4/2024',
      updatedAt: '11/30/1998'
    }),
  ]

}

export const AppState = createObservableProxy(new ObservableAppState())