var TeamController = require('../controllers/TeamController')

module.exports = (app) => {
  // DEVUELVE TODOS LOS EQUIPOS
  app.get('/api/teams/', TeamController.all)

  // DEVUELVE UN EQUIPO DADO SU NOMBRE
  app.get('/api/teams/:id/', TeamController.get)

  // DEVUELVE LOS JUGADORES DE UN EQUIPO
  app.get('/api/teams/:id/users', TeamController.players)

  // DEVUELVE LOS PARTIDOS EN LOS QUE HA JUGADO UN EQUIPO
  app.get('/api/teams/:id/matches', TeamController.matches)

  // DEVUELVE LOS GOLES DE UN EQUIPO
  app.get('/api/teams/:id/goals', TeamController.goals)
}
