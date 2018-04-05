var TeamController = require('../controllers/TeamController')

module.exports = (app) => {

  // DEVUELVE TODOS LOS EQUIPOS
  app.get('/api/teams/', TeamController.all)

  // DEVUELVE UN EQUIPO DADO SU NOMBRE
  app.get('/api/teams/:teamname/', TeamController.get)

  // DEVUELVE LOS JUGADORES DE UN EQUIPO
  app.get('/api/teams/:teamname/users', TeamController.players)

  // DEVUELVE LOS PARTIDOS EN LOS QUE HA JUGADO UN EQUIPO
  app.get('/api/teams/:teamname/matches', TeamController.matches)
}
