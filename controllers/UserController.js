const DatabaseService = require('../services/DatabaseService')
let UserController = null
UserController = {

  all (req, res) {
    const connection = DatabaseService.getConnection()
    connection.query('SELECT * from users', function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  get (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    connection.query('SELECT * from users where id = ?', [id], function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  goals (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    const query = 'SELECT g.* FROM ' +
        'users_teams AS ut ' +
        'INNER JOIN goals AS g ' +
        'ON ut.users_id=? AND g.users_teams_id = ut.id'

    connection.query(query, [id], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  },

  teamGoals (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    const teamsId = req.params['teams_id']
    const query = 'SELECT g.* FROM ' +
        'users_teams AS ut ' +
        'INNER JOIN goals AS g ' +
        'ON ut.users_id=? AND ut.teams_id=? AND g.users_teams_id = ut.id'

    connection.query(query, [id, teamsId], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  },

  teamMatches (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    const teamsId = req.params['teams_id']
    const query = 'SELECT m.* FROM ' +
        'users_teams AS ut ' +
        'INNER JOIN users_teams_matches AS utm ' +
        'ON ut.users_id=? AND ut.teams_id=? AND utm.users_teams_id = ut.id ' +
        'INNER JOIN matches AS m ' +
        'ON m.id=utm.matches_id'

    connection.query(query, [id, teamsId], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  },

  tournaments (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    const query = 'SELECT * FROM ' +
        'users_teams AS ut ' +
        'INNER JOIN tournaments_users_teams AS tut ' +
        'ON ut.users_id=? AND tut.users_teams_id = ut.id ' +
        'INNER JOIN tournaments AS t ' +
        'ON tut.tournament_id=t.id'
    connection.query(query, [id], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  },

  matches (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    const query = 'SELECT m.* FROM ' +
        'users_teams AS ut ' +
        'INNER JOIN users_teams_matches AS utm ' +
        'ON ut.users_id=? AND utm.users_teams_id = ut.id ' +
        'INNER JOIN matches AS m ' +
        'ON m.id=utm.matches_id'

    connection.query(query, [id], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  },

  teams (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    connection.query('SELECT * from users_teams where users_id = ?', [id], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  }
}

module.exports = UserController
