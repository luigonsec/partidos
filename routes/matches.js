var MatchController = require('../controllers/MatchController')

module.exports = (app) => {

  // DEVUELVE TODOS LOS PARTIDOS
  app.get('/api/matches', MatchController.all)

  // DEVUELVE EL PARTIDO EN BASE A SU ID
  app.get('/api/matches/:id', MatchController.get)

  // TODO: DEVUELVE LOS EQUIPOS QUE JUEGAN UN PARTIDO
  //app.get('/api/matches/:id/teams', MatchController.teams)

  // TODO: DEVUELVE LOS JUGADORES QUE JUEGAN UN PARTIDO
  //app.get('/api/matches/:id/users', MatchController.teams)

}
