module.exports = {
  async createAccount(req, res, next) {
    const db = req.app.get('db');
    try {
      const newAccount = await db.business.insert({
        ...req.body,
        primary_industry_id: Number(req.body.primary_industry_id),
      });
      req.session.business = newAccount;
      res.send(newAccount);
    } catch (err) {
      next(err);
    }
  },
  async getIndustries(req, res, next) {
    const db = req.app.get('db');
    try {
      const industries = await db.primary_industry.find();
      res.send(industries);
    } catch (err) {
      next(err);
    }
  },
};
