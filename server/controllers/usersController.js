const { createPassword } = require('../utils/passwords');
const User = require('../classes/User');

module.exports = {
  async signup(req, res, next) {
    const db = req.app.get('db');
    console.log('session in signup', req.session);
    try {
      const hashedPassword = await createPassword(req.body.password, true);
      const newUser = await db.users.insert({
        ...req.body,
        password: hashedPassword,
        role_id: 2,
      });
      req.session.user = new User(newUser);
      res.send(req.session.user);
    } catch (err) {
      next(err);
    }
  },
};
