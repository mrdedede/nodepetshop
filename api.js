const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()

app.use(bodyParser.json())

app.post('/animal', (req, res) => {
  let pet = {
    name: req.body.name,
    species: req.body.species,
    age: req.body.age,
    owner: req.body.owner
  }
  let petList = JSON.parse(fs.readFileSync('animals.json'))
  petList.push(pet)
  fs.writeFileSync('animals.json', JSON.stringify(petList))
  res.sendStatus(200)
})

app.put('/animal/:name/:species', (req, res) => {
  let pet = {
    name: req.params.name,
    species: req.params.species,
    age: req.body.age,
    owner: req.body.owner
  }
  let index = 0
  let found = false
  let petList = JSON.parse(fs.readFileSync('animals.json'))
  petList.forEach(animal => {
    if(animal.name == req.params.name && animal.species == req.params.species) {
      found = true
    }
    if (!found) {
      index++
    }
  })
  petList[index] = pet
  fs.writeFileSync('animals.json', JSON.stringify(petList))
  if (found) {
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
})

app.get('/owner/:owner', (req, res) => {
  let petList = JSON.parse(fs.readFileSync('animals.json'))
  let returnList = []
  petList.forEach(pet => {
    if(pet.owner == req.params.owner) {
      returnList.push(pet)
    }
  })
  res.send(returnList)
})

app.delete('/owner/:owner', (req, res) => {
  let oldList = JSON.parse(fs.readFileSync('animals.json'))
  let found = false
  let newList = []
  oldList.forEach(pet => {
    if(pet.owner != req.params.owner) {
      newList.push(pet)
    } else {
      found = true
    }
  })
  if(found) {
    fs.writeFileSync('animals.json', JSON.stringify(newList))
    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
})

app.delete('/animal/:name/:species/:age/:owner', (req, res) => {
  let oldList = JSON.parse(fs.readFileSync('animals.json'))
  let newList = []
  let found = false
  oldList.forEach(pet => {
    if(pet.owner != req.params.owner || pet.name != req.params.name ||
      pet.species != req.params.species || pet.age != req.params.age) {
      newList.push(pet)
    } else {
      found = true
    }
  })
  if(found) {
    fs.writeFileSync('animals.json', JSON.stringify(newList))
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

app.get('/animal/list', (req, res) => {
  res.send(JSON.parse(fs.readFileSync('animals.json')))
})

app.get('/', (req, res) => {
  res.json("Test")
})

app.listen(3000, () => console.log("Server's on!"))