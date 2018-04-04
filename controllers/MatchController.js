const DatabaseService = require('../services/DatabaseService')
const UserController = require('./UserController')

module.exports = {

  all (req, res) {
    const connection = DatabaseService.getConnection()
    connection.query('SELECT * from matches', function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  get (req, res) {
    const connection = DatabaseService.getConnection()
    const id = req.params['id']
    connection.query('SELECT * from matches where id = ?', [id], function (error, results, fields) {
      if (error) return res.json({error: true})
      return res.json(results)
    })
  },

  createdBy (req, res) {
    const connection = DatabaseService.getConnection()
    const username = req.params['username']
    UserController.idByUsername(username, function (err, id) {
      if (err) return res.json({'error': true})
      connection.query('SELECT * from matches where id_user = ?', [id], function (error, results, fields) {
        if (error) return res.json({error: true})
        return res.json(results)
      })
    })
  }
}
