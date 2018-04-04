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
    const username = req.params['username']
    connection.query('SELECT * from users where username = ?', [username], function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  matches (req, res) {
    const connection = DatabaseService.getConnection()
    const username = req.params['username']
    UserController.idByUsername(username, function (err, id) {
      if (err) return res.json({'error': true})
      connection.query('SELECT * from matches where users_id = ?', [id], function (error, results, fields) {
        if (error) return res.json({'error': true})
        return res.json(results)
      })
    })
  },

  idByUsername (username, cb) {
    const connection = DatabaseService.getConnection()
    connection.query('SELECT * from users where username = ?', [username], function (error, results, fields) {
      if (error) return cb(error)
      if (results.length > 1) return cb(error)
      return cb(null, results[0].id)
    })
  }
}

module.exports = UserController
