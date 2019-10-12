module.exports = {
  async createIndustries(req, res) {
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
  },
};

function createApiName(i) {
  const stripped = i.replace(/[/'-]/g, '');
  const split = stripped.toLowerCase().split(' ');
  const added = split.map((s, i) => {
    let add = i === split.length - 1 ? s : (s += '_');
    return add;
  });
  return added.join('');
}
