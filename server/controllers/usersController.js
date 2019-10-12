module.exports = {
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
