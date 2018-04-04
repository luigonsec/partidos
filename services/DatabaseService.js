var mysql = require('mysql')
var mySQLConf = require('../config/mysql')
var connection = null

module.exports = {

  iniciar () {
    connection = mysql.createConnection(mySQLConf)
    connection.connect()
  },

  getConnection () {
    return connection
  },

  stop () {
    connection.end()
  }

}
