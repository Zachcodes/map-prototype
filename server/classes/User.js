module.exports = class User {
  constructor(dbUser) {
    this.username = dbUser.username;
  }
};
