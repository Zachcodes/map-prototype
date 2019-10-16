module.exports = (req, res, next) => {
  if (!req.session.hasOwnProperty('user')) req.session.user = {};
  if (!req.session.hasOwnProperty('business')) req.session.business = {};
  if (!req.session.hasOwnProperty('loggedIn')) req.session.loggedIn = false;
  next();
};
