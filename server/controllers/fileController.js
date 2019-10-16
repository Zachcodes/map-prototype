const formidable = require('formidable');
const parse = require('csv-parse');
const fs = require('fs');
const Coordinate = require('../classes/Coordinate');

module.exports = {
  async uploadCsv(req, res, next) {
    const db = req.app.get('db');
    const businessId = req.session.business.id ? req.session.business.id : 14;
    const output = [];
    var form = new formidable.IncomingForm();
    try {
      form.on('file', (field, file) => {
        fs.readFile(file.path, (err, data) => {
          const parser = parse({
            delimiter: ',',
            columns: true,
          });

          parser.on('readable', function() {
            let record;
            while ((record = parser.read())) {
              output.push(
                new Coordinate({ ...record, business_id: businessId })
              );
            }
          });

          parser.on('error', function(err) {
            console.error(err.message);
          });

          parser.on('end', () => {
            output.forEach(c => db.coordinates.insert(c));
          });

          parser.write(data);
          parser.end();
        });
      });
      form.parse(req);
    } catch (err) {
      next(err);
    }

    res.sendStatus(200);
  },
};
