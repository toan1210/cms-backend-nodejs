const jwt = require("jsonwebtoken");
const Admin = require("./../models/Admin");
module.exports.CheckLogin = async function (req, res, next) {
  try {
    if (!req.cookies || !req.cookies.token) {
      return res.redirect("/");
    }
    var decoded = jwt.verify(req.cookies.token, "mk");
    if (!decoded._id) {
      return res.json({
        code: 401,
        message: "Đúng",
        success: false,
      });
    }
    const user = await Admin.findById(decoded._id);
    req.user = user;
    next();
  } catch (error) {
    return res.redirect("/");
    next();
  }
};

module.exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.roles)) {
      return res.redirect("/");
    }
    next();
  };
};
