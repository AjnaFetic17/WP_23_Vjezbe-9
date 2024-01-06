const express = require('express');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  let weight = parseInt(req.body.weight);
  let height = parseInt(req.body.height);
  res.send(`BMI is ${(weight / (height * height)) * 10000}`)
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})