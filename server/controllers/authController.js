const { compare } = require('../utils/passwords');

module.exports = {
  async login(req, res, next) {
    const db = req.app.get('db');
    try {
      const [user] = await db.users.find({ username: req.body.username });
      if (!user) return res.status(404).send('No user found by that email');
      if (!compare(req.body.password, user.password))
        return res.status(401).send('Username/password combination failed');
      req.session.user = user;
      res.send(req.session);
    } catch (err) {
      next(err);
    }
  },
};
