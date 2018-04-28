const express = require('express')
const smmry = require('smmry')
const cors = require('cors')
const bodyParser = require('body-parser')

require('dotenv').config()

const api = smmry({
  SM_API_KEY: process.env.SM_API_KEY,
  SM_WITH_BREAK: true
})
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const urlToShorten = req.body.url
  api
    .summarizeUrl(urlToShorten)
    .then(data => {
      data.sm_api_content = data.sm_api_content.split('[BREAK]')
      res.send(data)
    })
    .catch(data => res.send(data))
})

app.listen(3000)
