require('dotenv').config({ path: `${__dirname}/../.env` })
const express = require('express')
const massive = require('massive')

const { CONNECTION_STRING } = process.env

const app = express()

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance)
  })
  .catch(err => console.log('Error logging in to database', err))

app.get('/api/coordinates', async (req, res) => {
  const db = req.app.get('db')
  const [coordinates] = await db.coordinates.find()
  res.send(coordinates)
})

app.listen(4000, () => console.log('Listening on port 4000'))
