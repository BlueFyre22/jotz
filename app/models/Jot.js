import { generateId } from "../utils/GenerateId.js";


export class Jot {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = ""
    this.createdAt = data.listedAt == undefined ? Date() : new Date(data.listedAt)
    this.updatedAt = data.createdAt

  }

  get smallCardTemplate() {
    return `
        <div class="little-card-border d-flex flex-column mb-1" style="border-style: ridge;border-left: 4px solid ${this.color}">
            <div class="d-flex justify-content-between">
              <div class="heading-text col-md-5">${this.title}</div>
              <div class="heading-text col-md-5 text-end " >${this.createdAt}</div>
            </div>
          <div class=""><span>${this.body}</span></div>
        </div>
  `
  }

  get createdAtDateString() {
    return this.createdAt.toLocaleString('en-US', { month: 'long' })
  }

}