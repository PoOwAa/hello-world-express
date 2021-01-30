const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('hello world from example app!')
})

app.listen(3000)