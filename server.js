// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
const express = require('express') // call express
const app = express() // define our app using express
const bodyParser = require('body-parser')
const configLocal = require('./config/local.js')
const DatabaseService = require('./services/DatabaseService')
DatabaseService.iniciar()


const UsersRoutes = require('./routes/users')
const MatchesRoutes = require('./routes/matches')
const TeamsRoutes = require('./routes/teams')
const cors = require('cors')


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors({
  origin: 'http://localhost:8080'
}))


UsersRoutes(app)
MatchesRoutes(app)
TeamsRoutes(app)

var port = process.env.PORT || configLocal.port || 8081
app.listen(port)

module.exports = app
