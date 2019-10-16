const { COOKIE_SECRET, NODE_ENV } = process.env;
const redis = require('redis');
const session = require('express-session');

let sessionObj = {
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
};

if (NODE_ENV === 'production') {
  let RedisStore = require('connect-redis')(session);
  let redisClient = redis.createClient();
  sessionObj.store = new RedisStore({ client: redisClient });
  sessionObj.cookie = { secure: true };
}

module.exports = session(sessionObj);
