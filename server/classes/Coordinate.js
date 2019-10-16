const moment = require('moment');

module.exports = class Coordinate {
  constructor(csvData) {
    console.log(csvData);
    this.address = csvData.address;
    this.lat = Number(csvData.lat);
    this.lng = Number(csvData.lng);
    this.description = csvData.description;
    this.business_id = Number(csvData.business_id);
    this.date_of_service = csvData.date_of_service;
    this.active = !!Number(csvData.active);
  }

  formatAddress(date) {
    return date
      .split('.')
      .map(d => moment(d, 'DD-MM-YYYY'))
      .join('.');
  }
};
