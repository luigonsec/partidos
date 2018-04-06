var UserController = require('../controllers/UserController')

module.exports = (app) => {
  // DEVUELVE TODOS LOS USUARIOS
  app.get('/api/users', UserController.all)

  // DEVUELVE UN USUARIO
  app.get('/api/users/:id/', UserController.get)

  // DEVUELVE LOS EQUIPOS EN LOS QUE HA JUGADO UN USUARIO
  app.get('/api/users/:id/teams', UserController.teams)

  // DEVUELVE LOS PARTIDOS DE UN USUARIO
  app.get('/api/users/:id/matches', UserController.matches)

  // DEVUELVE LOS GOLES DE UN USUARIO
  app.get('/api/users/:id/goals', UserController.goals)

  // DEVUELVE LOS GOLES DE UN USUARIO EN UN EQUIPO
  app.get('/api/users/:id/teams/:teams_id/goals', UserController.teamGoals)

  // DEVUELVE LOS TORNEOS DE UN USUARIO
  app.get('/api/users/:id/tournaments', UserController.tournaments)

  // DEVUELVE LOS PARTIDOS DE UN USUARIO EN UN EQUIPO
  app.get('/api/users/:id/teams/:teams_id/matches', UserController.teamMatches)
}
