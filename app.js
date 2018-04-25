import Deck from './deck'

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-button')
  submitButton.addEventListener('click', handleSubmit)
})

function handleSubmit() {
  const urlToShorten = document.getElementById('url-input').value
  const deck = new Deck()

  fetch('http://localhost:3000', {
    method: 'POST',
    body: JSON.stringify({ url: urlToShorten }),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(json => {
    deck.addTitle(json.sm_api_title)

    json.sm_api_content.forEach(text => deck.addText(text))
    deck.addHeading('Thank You', 1)

    const definitionField = document.getElementById('definition')
    definitionField.value = deck.toString()
    console.log(deck)
    document.getElementById('definition-form').submit()
  })
}
