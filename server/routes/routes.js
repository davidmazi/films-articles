const express = require("express");
const path = require("path");

const apiRoutes = require("./API/apiRoutes");
const authMiddleware = require("../middleware/auth.middleware");
const utils = require("../utils/utils");

const router = express.Router();

router.use("/api", apiRoutes);

//Route for Static Files of Angular
const staticAngular = express.static(path.join(__dirname, '../../webapp/dist'));

router.use(staticAngular);

router.use(utils.excluding(authMiddleware.isAuth, ["/auth", "/auth/"]));

//If no route before worked, transform the request as angular route
router.use((req, res, next) => {
    if (req.get('Accept') && typeof req.get('Accept') === 'string' && req.get('Accept').includes('text/html')) {
        req.url = '/#' + req.url;
    }
    next();
}, staticAngular);

module.exports = router;