const bcrypt = require('bcrypt');
const moment = require('moment');
const saltRounds = Number(process.env.SALT_ROUNDS);

module.exports = {
  async createHash(plainTextPassword, calcTime = false) {
    let saltStart, saltEnd, hashStart, hashEnd;
    calcTime && (saltStart = moment());
    const salt = await bcrypt.genSalt(saltRounds);
    calcTime && (saltEnd = moment());
    calcTime && console.log('salt calc time', saltEnd.diff(saltStart));
    calcTime && (hashStart = moment());
    const hash = await bcrypt.hash(plainTextPassword, salt);
    calcTime && (hashEnd = moment());
    calcTime && console.log('hash calc time', hashEnd.diff(hashStart));
    return hash;
  },
};
