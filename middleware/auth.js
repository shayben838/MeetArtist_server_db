const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // get token from headar
  const token = req.header("x-auth-token");
  //   check if not token
  if (!token) {
    console.log("!token");
    res.status(401).json({ msg: "No token , authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log("Token is not valid");
    res.status(401).json({ msg: "Token is not valid" });
  }
};
