function makeUserAvailable(req, res, next) {
  res.local.user = req.user;
  return next();
}

module.exports = makeUserAvailable;
