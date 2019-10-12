module.exports = {
  async getCoordinates(req, res) {
    const db = req.app.get('db');
    const coordinates = await db.coordinates.getCoordinates();
    res.send(coordinates);
  },
};
