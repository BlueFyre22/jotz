import { generateId } from "../utils/GenerateId.js";


export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body == undefined ? "" : data.body
    this.createdAt = (data.createdAt == undefined ? Date() : new Date(data.createdAt))
    this.updatedAt = new Date()

  }

  get smallCardTemplate() {
    return `
        <div onclick="app.jotzController.setActiveJot('${this.id}')" class="little-card-border d-flex flex-column mb-1 rounded" style="border-style: ridge;border-left: 4px solid ${this.color}">
            <div class="d-flex justify-content-between">
              <div class="heading-text col-md-5">${this.title}</div>
              <div class="heading-text col-md-5 text-end " >${this.updatedAtDateString}</div>
            </div>
          <div class="mt-3"><span>${this.shortBody}</span></div>
        </div>
  `
  }

  get createdAtDateString() {
    return this.createdAt.toLocaleString("en-US", {})
  }

  get updatedAtDateString() {
    return this.updatedAt.toLocaleString()
  }

  get shortBody() {
    return this.body.slice(0, 100)
  }


  get activeJotTemplate() {
    return `
    <div class="col-md-12 px-3 d-flex flex-wrap">
            <div class="col-1 bg-light">
              <div><img src="assets/img/bookmark-icon-element-png.webp" alt="" class="bookmark-size"></div>
            </div>
            <div class="col-md-11 p-3">
              <h3>${this.title}</h3>
          <form id="active-jot-form">
              <div class="col-md-8">
                <p>Created on: ${this.createdAtDateString}</p>
                <p>Updated on: ${this.updatedAtDateString}</p>

              </div>
              
              <div class="col-md-8 px-3 ">
                <button class="rounded mx-3" onclick="">🗑️Delete</button>
                <button class="rounded mx-3" type="button" onclick="app.jotzcontroller.saveActiveJot()">Save 💾</button>
              </div>
            </div>


            <div class="col-12">
              <textarea name="body" class="mt-3 rounded bg-dark text-light fs-5 text-areaz" id="main-body"
                rows="25">${this.body}</textarea>
            </div>
          </form>
          </div>
    `
  }

}