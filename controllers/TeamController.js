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
    const id = req.params['id']
    connection.query('SELECT * from teams where id = ?', [id], function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  matches (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']

    const query =
    'SELECT * from matches WHERE teams_id_1 = ? OR teams_id_2 = ?'

    connection.query(query, [id, id], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  },

  goals (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    const query = 'SELECT g.* FROM ' +
        'users_teams AS ut ' +
        'INNER JOIN goals AS g ' +
        'ON ut.teams_id=? AND g.users_teams_id = ut.id'

    connection.query(query, [id], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  },

  players (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    const query = 'SELECT * from users_teams WHERE teams_id = ?'
    connection.query(query, [id], function (error, results, fields) {
      if (error) return res.json({'error': true})
      return res.json(results)
    })
  }
}

module.exports = TeamController
