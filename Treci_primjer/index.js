//npm init for creating the project, then express installation with npm install and nodemon added
const express = require('express')
const app = express()

const superheroes = require('superheroes')

app.get('/', function (req, res) {
  //res.send('Hello World')
  //also
  res.send('<h1>Hello World</h1>')
})

app.get('/hero', function (req, res) {
  //npm install superheroes
  //also
  res.send(superheroes.random())
})
//app.listen(3000)
app.listen(3000, () => {
  console.log('Server started on port 3000');
})