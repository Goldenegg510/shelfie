require('dotenv').config()
const express = require('express')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')
const controller = require('./controller')
const app = express()
app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  app.listen(SERVER_PORT, () => {
    console.log('listening on port', SERVER_PORT)
  })
})

app.post('/api/inventory', controller.createProduct)