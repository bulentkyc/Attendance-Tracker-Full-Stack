const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const router = require('./controller/router')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(express.static('public'))
app.use(cors())
app.use('/', router)

app.get('/express_backend', (req, res) => {
  res.send({ data: 'Your react app is connected to backend' })
})

app.post('/api/world', (req, res) => {
  console.log(req.body)
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  )
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
