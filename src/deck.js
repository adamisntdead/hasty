export default class Deck {
  constructor() {
    this.slides = []
    this.title = 'My Presentation'
  }

  addTitle(title) {
    this.title = title
    this.slides.push(textBlock(title, 'h1'))
  }

  addText(text) {
    this.slides.push(textBlock(text, 'p'))
  }

  addHeading(text, num) {
    this.slides.push(textBlock(text, `h${num}`))
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      loop: false,
      slides: this.slides
    })
  }
}

function textBlock(value, format) {
  return {
    blocks: [
      {
        type: 'text',
        value,
        format
      }
    ]
  }
}
