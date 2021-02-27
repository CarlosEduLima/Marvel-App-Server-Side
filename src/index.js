const express = require('express')
const app = express()
const Routes = require('./main/config/routes')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
Routes(app)
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`)
})

module.exports = app
