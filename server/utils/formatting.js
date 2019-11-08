module.exports = {
  stripSession(sessionObj) {
    let sessionCopy = { ...sessionObj };
    delete sessionCopy.loggedIn;
    delete sessionCopy.cookie;
    console.log(sessionCopy);
    return sessionCopy;
  },
  stripSensitiveUserValues(userObj) {
    let userCopy = { ...userObj };
    delete userCopy.password;
    return userCopy;
  },
};
