const { createPassword } = require('../utils/passwords');
const User = require('../classes/User');

module.exports = {
  async signup(req, res, next) {
    const db = req.app.get('db');
    try {
      const hashedPassword = await createPassword(req.body.password, true);
      const newUser = await db.users.insert({
        ...req.body,
        password: hashedPassword,
        role_id: 2,
      });
      res.send(new User(newUser));
    } catch (err) {
      next(err);
    }
  },
};
