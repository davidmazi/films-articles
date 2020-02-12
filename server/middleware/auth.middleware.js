const userController = require("../controller/userController");

module.exports.isAuth = function (req, res, next) {
    if (req.cookies && req.cookies["Movies"]) {
        userController.findUserById(req.cookies["Movies"], function (err, foundUser) {
                if (req.cookies["Movies"] === foundUser._id.toString()) {
                    return next();
                } else {
                    return res.redirect("/auth");
                }
            }
        );
    } else {
        return res.redirect("/auth");
    }
};

module.exports.isAuthAPI = function (req, res, next) {
    if (req.cookies && req.cookies["Movies"]) {
        userController.findUserById(req.cookies["Movies"], function (err, foundUser) {
                if (req.cookies["Movies"] === foundUser._id.toString()) {
                    return next();
                } else {
                    return res.status(500).end();
                }
            }
        );
    } else {
       return res.status(500).end();
    }
};
