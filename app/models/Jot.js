import { generateId } from "../utils/GenerateId.js";


export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body == undefined ? "" : data.body
    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    this.updatedAt = new Date()

  }

  get smallCardTemplate() {
    return `
        <div onclick="app.jotzController.setActiveJot('${this.id}')" class="little-card-border d-flex flex-column mb-1 rounded" style="border-style: ridge;border-left: 4px solid ${this.color}">
            <div class="d-flex justify-content-between">
              <div class="heading-text col-md-5">${this.title}</div>
              <div class="heading-text col-md-5 text-end " >${this.createdAtDateString}</div>
            </div>
          <div class="mt-3"><span>${this.shortBody}</span></div>
        </div>
  `
  }


  //NOTE - Trying some time formatting
  timeStamp = new Date();
  timeFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: "full" })

  // was not used at all ^^



  get createdAtDateString() {
    return this.createdAt.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: 'numeric', })
  }

  get updatedAtDateString() {
    return new Date().toLocaleTimeString("en-US", { month: "long", day: "numeric", year: '2-digit', hour12: false, })
  }




  get shortBody() {
    return this.body.slice(0, 100)
  }


  get activeJotTemplate() {
    return ` <form id="active-jot-form"  class="col-md-12 px-3 d-flex flex-wrap">
    
            <div class="col-1 bg-card-var">
              <div><img src="assets/img/bookmark-icon-element-png.webp" alt="" class="bookmark-size rounded" style="background-color: ${this.color}"></div>
            </div>
            <div class="col-md-11 p-3">
              <h3>${this.title}</h3>
          
              <div class="col-md-8">
                <p name="createdAt">Created on: ${this.createdAtDateString}</p>
                <p name="updatedAt">Updated on: ${this.updatedAtDateString}</p>

              </div>
              
              <div class="col-md-8 px-3 ">
                <button class="rounded mx-3 btn btn-danger" type="button" onclick="app.jotzController.deleteJot('${this.id}')">🗑️Delete</button>
                <button class="rounded mx-3 btn btn-info" type="button" onclick="app.jotzController.saveActiveJot()">Save 💾</button>
              </div>
            </div>


            <div class="col-12">
              <textarea name="body" class="mt-3 rounded bg-dark text-light fs-5 text-areaz"
                rows="25">${this.body}</textarea>
            </div>
          
          
          </form>
    `
  }

}