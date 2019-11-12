const { compare } = require('../utils/passwords');
const {
  stripSession,
  stripSensitiveUserValues,
} = require('../utils/formatting');

module.exports = {
  async login(req, res, next) {
    const db = req.app.get('db');
    try {
      const [user] = await db.users.find({ username: req.body.username });
      if (!user) return res.status(404).send('No user found by that email');
      if (!(await compare(req.body.password, user.password)))
        return res.status(401).send('Username/password combination failed');
      const [business] = await db.business.find({ id: user.business_id });
      req.session.business = business;
      req.session.user = stripSensitiveUserValues(user);
      req.session.loggedIn = true;
      res.send(stripSession(req.session));
    } catch (err) {
      next(err);
    }
  },
  async logout(req, res) {
    req.session.destroy();
    res.sendStatus(200);
  },
  getSession(req, res) {
    res.send(stripSession(req.session));
  },
};
