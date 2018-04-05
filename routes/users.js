var UserController = require('../controllers/UserController')

module.exports = (app) => {

  // DEVUELVE TODOS LOS USUARIOS
  app.get('/api/users', UserController.all)

  // DEVUELVE UN USUARIO
  app.get('/api/users/:username/', UserController.get)

  // DEVUELVE LOS PARTIDOS DE UN USUARIO
  app.get('/api/users/:username/matches', UserController.matches)

  // DEVUELVE LOS EQUIPOS EN LOS QUE HA JUGADO UN USUARIO
  app.get('/api/users/:username/teams', UserController.teams)


}
