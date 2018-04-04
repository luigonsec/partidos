// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express') // call express
var app = express() // define our app using express
var bodyParser = require('body-parser')

var UserController = require('./controllers/UserController')
var MatchController = require('./controllers/MatchController')
var DatabaseService = require('./services/DatabaseService')


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/**
* RUTAS DE LA APP
*/

// DEVUELVE TODOS LOS USUARIOS
app.get('/api/users', UserController.all)

// DEVUELVE UN USUARIO
app.get('/api/users/:username/', UserController.get)

// DEVUELVE LOS PARTIDOS DE UN USUARIO
app.get('/api/users/:username/matches', UserController.matches)

// DEVUELVE TODOS LOS PARTIDOS
app.get('/api/matches', MatchController.all)

// DEVUELVE EL PARTIDO EN BASE A SU ID
app.get('/api/matches/:id', MatchController.get)



// TODO:
// DEVUELVE LOS EQUIPOS EN LOS QUE HA JUGADO UN USUARIO
// app.get('/api/users/:username/teams', UserController.teams)

// DEVUELVE TODOS LOS EQUIPOS
// app.get('/api/teams/', TeamController.all)

// DEVUELVE UN EQUIPO DADO SU NOMBRE
// app.get('/api/teams/:teamname/', TeamController.get)

// DEVUELVE LOS JUGADORES DE UN EQUIPO
// app.get('/api/teams/:teamname/users', TeamController.player)

// DEVUELVE LOS PARTIDOS EN LOS QUE HA JUGADO UN EQUIPO
// app.get('/api/teams/matches', TeamController.matches)


var port = process.env.PORT || 8080
app.listen(port)

DatabaseService.iniciar()

module.exports = app
