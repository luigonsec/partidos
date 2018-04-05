const DatabaseService = require('../services/DatabaseService')
let TeamController = null
TeamController = {

  all (req, res) {
    const connection = DatabaseService.getConnection()
    connection.query('SELECT * from teams', function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  get (req, res) {
    const connection = DatabaseService.getConnection()
    const teamname = req.params['teamname']
    connection.query('SELECT * from teams where teamname = ?', [teamname], function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  matches (req, res) {
    const connection = DatabaseService.getConnection()
    const teamname = req.params['teamname']
    TeamController.idByTeamname(teamname, function (err, id) {
      if (err) return res.json({'error': true})
      const query =

      'SELECT * from match_team_vs_anyone AS t1 '+
      'INNER JOIN matches AS t2 ON t1.matches_id=t2.id '+
      'WHERE t1.teams_id = ?'

      connection.query(query, [id], function (error, results, fields) {
        if (error) return res.json({'error': true})
        return res.json(results)
      })
    })
  },

  players (req, res) {
    const connection = DatabaseService.getConnection()
    const teamname = req.params['teamname']
    TeamController.idByTeamname(teamname, function (err, id) {
      if (err) return res.json({'error': true})
      const query = 'SELECT * from users_teams WHERE teams_id = ?'

      connection.query(query, [id], function (error, results, fields) {
        if (error) return res.json({'error': true})
        return res.json(results)
      })
    })
  },

  idByTeamname (teamname, cb) {
    const connection = DatabaseService.getConnection()
    connection.query('SELECT * from teams where teamname = ?', [teamname], function (error, results, fields) {
      if (error) return cb(error)
      if (results.length > 1) return cb(error)
      return cb(null, results[0].id)
    })
  }
}

module.exports = TeamController
