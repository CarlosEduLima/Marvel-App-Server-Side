const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3001

app.listen(8080, () => {
  console.log(`Server is listening on port ${PORT}.`)
})

module.exports = app
