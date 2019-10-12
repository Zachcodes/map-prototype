require('dotenv').config({ path: `${__dirname}/../.env` });
const express = require('express');
const massive = require('massive');
const uc = require('./controllers/usersController');

const { CONNECTION_STRING } = process.env;

const app = express();

app.use(express.json());

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set('db', dbInstance);
  })
  .catch(err => console.log('Error logging in to database', err));

// Users routes
app.post('/api/createAccount', uc.createAccount);
app.post('/api/signup', uc.signup);

app.get('/api/coordinates', async (req, res) => {
  const db = req.app.get('db');
  const coordinates = await db.coordinates.getCoordinates();
  res.send(coordinates);
});

app.post('/api/industry', async (req, res) => {
  const db = req.app.get('db');
  let industries = req.body.industries;
  const mapped = industries.map(i => {
    return {
      industry_name: i,
      api_name: createApiName(i),
    };
  });
  await db.primary_industry.insert(mapped);
  res.sendStatus(200);
});

function createApiName(i) {
  const stripped = i.replace(/[/'-]/g, '');
  const split = stripped.toLowerCase().split(' ');
  const added = split.map((s, i) => {
    let add = i === split.length - 1 ? s : (s += '_');
    return add;
  });
  return added.join('');
}

app.listen(4000, () => console.log('Listening on port 4000'));
