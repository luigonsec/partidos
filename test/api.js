process.env.NODE_ENV = 'test'


let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)

//Our parent block
  /*
  * Test the /GET route
  */
describe('TESTING USERS', () => {
  describe('/GET users', () => {
    it('DEBE DEVOLVER TODOS LOS USUARIOS', (done) => {
      chai.request(server)
      .get('/api/users')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.eql(30)
        done()
      })
    })
  })

  describe('/GET users/jug1', () => {
    it('DEBE DEVOLVER UN USUARIO', (done) => {
      chai.request(server)
      .get('/api/users/jug1')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.eql(1)
        done()
      })
    })
  })

  describe('/GET users/jug1/teams', () => {
    it('DEBE DEVOLVER UN USUARIO', (done) => {
      chai.request(server)
      .get('/api/users/jug1/teams')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.eql(2)
        done()
      })
    })
  })
})



describe('TESTING MATCHES', () => {
  describe('/GET matches', () => {
    it('DEBE DEVOLVER TODOS LOS PARTIDOS', (done) => {
      chai.request(server)
      .get('/api/matches')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.eql(12)
        done()
      })
    })
  })

  describe('/GET /users/jugj1/matches/', () => {
    it('DEBE DEVOLVER LOS PARTIDOS DE UN USUARIO', (done) => {
      chai.request(server)
      .get('/api/users/jug1/matches')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.eql(2)
        done()
      })
    })
  })

  describe('/GET matches/1', () => {
    it('DEVUELVE EL PARTIDO EN BASE A SU ID', (done) => {
      chai.request(server)
      .get('/api/matches/1')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('array')
        res.body.length.should.be.eql(1)
        done()
      })
    })
  })

})
