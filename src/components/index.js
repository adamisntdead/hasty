import React, { Component } from 'react'
import Deck from '../deck'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { url: '', presentation: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ url: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()

    const deck = new Deck()
    fetch('http://localhost:3000', {
      method: 'POST',
      body: JSON.stringify({ url: this.state.url }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        deck.addTitle(json.sm_api_title)
        json.sm_api_content.forEach(text => deck.addText(text))
        deck.addHeading('Thank You', 1)

        this.setState({ presentation: deck.toString() })
        this.refs.slidesForm.submit()
        console.log(this.refs)
      })
  }

  render() {
    return (
      <div>
        <input type="url" value={this.state.url} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>
          Create New Deck with Prefilled Data
        </button>

        <form
          ref="slidesForm"
          action="https://slides.com/decks/define"
          method="POST"
          target="_blank"
        >
          <input
            type="hidden"
            value={this.state.presentation}
            name="definition"
          />
        </form>
      </div>
    )
  }
}

export default App
