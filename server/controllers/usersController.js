module.exports = {
  async createAccount(req, res, next) {
    const db = req.app.get('db');
    console.log(req.body);
    try {
      const newAccount = await db.business.insert(req.body);
      console.log(newAccount);
      res.send(newAccount);
    } catch (err) {
      next(err);
    }
  },
  async signup(req, res, next) {
    const db = req.app.get('db');
    try {
      const user = await db.users.insert({ ...req.body, role_id: 2 });
      res.send(user);
    } catch (err) {
      next(err);
    }
  },
};
