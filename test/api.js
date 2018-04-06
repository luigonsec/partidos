/* global describe it:true */
/* eslint no-undef: "error" */

process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)

describe('TESTING USERS', () => {
  describe('/GET /users', () => {
    it('DEVUELVE TODOS LOS USUARIOS', (done) => {
      chai.request(server)
        .get('/api/users')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(10)
          done()
        })
    })
  })

  describe('/GET /users/1', () => {
    it('DEVUELVE UN USUARIO', (done) => {
      chai.request(server)
        .get('/api/users/1')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(1)
          done()
        })
    })
  })

  describe('/GET /users/1/teams', () => {
    it('DEVUELVE LOS EQUIPOS DEL USUARIO', (done) => {
      chai.request(server)
        .get('/api/users/1/teams')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(1)
          done()
        })
    })
  })

  describe('/GET /users/1/matches', () => {
    it('DEVUELVE LOS PARTIDOS DEL USUARIO', (done) => {
      chai.request(server)
        .get('/api/users/1/matches')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(5)
          done()
        })
    })
  })

  describe('/GET /users/1/goals/', () => {
    it('DEVUELVE LOS GOLES DE UN USUARIO', (done) => {
      chai.request(server)
        .get('/api/users/1/goals')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(4)
          done()
        })
    })
  })

  describe('/GET /users/1/teams/1/goals', () => {
    it('DEVUELVE LOS GOLES DE UN USUARIO EN UN EQUIPO', (done) => {
      chai.request(server)
        .get('/api/users/1/teams/1/goals')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(4)
          done()
        })
    })
  })

  describe('/GET /users/1/tournaments', () => {
    it('DEVUELVE LOS TORNEOS DEL USUARIO', (done) => {
      chai.request(server)
        .get('/api/users/1/tournaments')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(1)
          done()
        })
    })
  })

  describe('/GET /users/1/teams/1/matches', () => {
    it('DEVUELVE LOS PARTIDOS DE UN USUARIO EN UN EQUIPO', (done) => {
      chai.request(server)
        .get('/api/users/1/teams/1/matches')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(5)
          done()
        })
    })
  })
})

describe('TESTING MATCHES', () => {
  describe('/GET /matches', () => {
    it('DEVUELVE TODOS LOS PARTIDOS', (done) => {
      chai.request(server)
        .get('/api/matches')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(10)
          done()
        })
    })
  })

  describe('/GET /matches/1', () => {
    it('DEVUELVE EL PARTIDO EN BASE A SU ID', (done) => {
      chai.request(server)
        .get('/api/matches/1')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(1)
          done()
        })
    })
  })
})

describe('TESTING TEAMS', () => {
  describe('/GET /teams', () => {
    it('DEVUELVE TODOS LOS EQUIPOS', (done) => {
      chai.request(server)
        .get('/api/teams')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(6)
          done()
        })
    })
  })

  describe('/GET /teams/1', () => {
    it('DEVUELVE UN EQUIPO', (done) => {
      chai.request(server)
        .get('/api/teams/1')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(1)
          done()
        })
    })
  })

  describe('/GET /teams/1/users', () => {
    it('DEVUELVE TODOS LOS USUARIOS DE UN EQUIPO', (done) => {
      chai.request(server)
        .get('/api/teams/1/users')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(2)
          done()
        })
    })
  })

  describe('/GET /teams/1/matches', () => {
    it('DEVUELVE TODOS LOS PARTIDOS DE UN EQUIPO', (done) => {
      chai.request(server)
        .get('/api/teams/1/matches')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(5)
          done()
        })
    })
  })

  describe('/GET /teams/1/goals', () => {
    it('DEVUELVE TODOS LOS GOLES DE UN EQUIPO', (done) => {
      chai.request(server)
        .get('/api/teams/1/goals')
        .end((err, res) => {
          if (err) done(new Error())
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(6)
          done()
        })
    })
  })
})
