require('dotenv').config({ path: `${__dirname}/../.env` });
const express = require('express');
const massive = require('massive');
const uc = require('./controllers/usersController');
const ac = require('./controllers/accountController');
const mc = require('./controllers/mapController');
const utilC = require('./controllers/utilController');

const { CONNECTION_STRING, PORT } = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log('Error logging in to database', err));

// Account creation routes
app.get('/api/industries', ac.getIndustries);
app.post('/api/createAccount', ac.createAccount);
app.post('/api/signup', uc.signup);

// Map routes
app.get('/api/coordinates', mc.getCoordinates);

// Util routes
app.post('/api/industry', utilC.createIndustries);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
