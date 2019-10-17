require('dotenv').config({ path: `${__dirname}/../.env` });
const express = require('express');
const massive = require('massive');
const uc = require('./controllers/usersController');
const ac = require('./controllers/accountController');
const auc = require('./controllers/authController');
const mc = require('./controllers/mapController');
const fc = require('./controllers/fileController');
const utilC = require('./controllers/utilController');
const initSession = require('./middleware/initSession');
const setSession = require('./utils/setSession');

const { CONNECTION_STRING, PORT } = process.env;

const app = express();

app.use(setSession);

app.use(express.json());

app.use(initSession);

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log('Error logging in to database', err));

// Account creation routes
app.get('/api/industries', ac.getIndustries);
app.post('/api/createAccount', ac.createAccount);
app.post('/api/signup', uc.signup);

// Auth routes
app.post('/api/login', auc.login);
app.delete('/api/logout', auc.logout);
app.get('/api/session', auc.getSession);

// Map routes
app.get('/api/coordinates', mc.getCoordinates);

// File routes
app.post('/api/files', fc.uploadCsv);

// Util routes
app.post('/api/industry', utilC.createIndustries);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
