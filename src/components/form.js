import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Deck from '../deck'

export default class Form extends Component {
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
    // Localhost:3000 is the url of the small microservice running to fetch the summarized content
    fetch('http://localhost:5000', {
      method: 'POST',
      body: JSON.stringify({ url: this.state.url }),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => {
        deck.addTitle('Put Title Here')
        json.forEach(text => deck.addText(text))
        deck.addHeading('Thank You', 1)

        this.setState({ presentation: deck.toString() })
        this.refs.slidesForm.submit()
        console.log(this.refs)
      })
  }
  
  render() {
    return (
      <div>
          <TextField
            id="url"
            type="url"
            label="URL"
            value={this.state.url}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button variant="raised" color="primary" onClick={this.handleSubmit}>
            Create Presentation
          </Button>

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