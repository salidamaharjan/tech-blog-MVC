function isAuthenticator(req, res, next) {
  return !req.session.loggedIn ? res.redirect("/login") : next();
}

module.exports = { isAuthenticator };
