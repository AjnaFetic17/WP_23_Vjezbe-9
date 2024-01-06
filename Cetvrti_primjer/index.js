//bodyparser example
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
  let number1 = parseInt(req.body.num1);
  let number2 = parseInt(req.body.num2);
  console.log(number1, typeof number1);

  res.send(`Result is ${number1 + number2}`)
})

app.listen(3000, () => {
  console.log('Server started on port 3000');
})