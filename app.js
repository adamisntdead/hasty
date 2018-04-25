const jsonp = require('jsonp')

const smmryKey = '9573A82B94'
const urlToShorten = 'https://www.britannica.com/biography/Elon-Musk'

const deck = {
  title: 'Deck Title',
  loop: false,
  'theme-font': 'opensans',
  slides: [
    {
      blocks: [
        {
          type: 'text',
          value: 'Deck Title'
        }
      ]
    },
    {
      blocks: [
        {
          type: 'text',
          value: 'Thank You',
          format: 'h1'
        }
      ]
    }
  ]
}

document.addEventListener("DOMContentLoaded", () => { 
  const definitionField = document.getElementById('definition')
  definitionField.value = JSON.stringify(deck)
  
  const data = jsonp(`https://api.smmry.com/&SM_API_KEY=${smmryKey}&SM_URL=${urlToShorten}`);
  data.then((res) => {
    console.log(res);
  });
})
