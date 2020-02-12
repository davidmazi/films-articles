module.exports.excluding = function (middleware, pathsArr = [], startsWith = []) {
    return function (req, res, next) {
        if (pathsArr.includes(req.path)) {
            return next();
        } else if ((startsWith.filter(path => req.path.includes(path))).length !== 0) {
            return next();
        }
        return middleware(req, res, next);
    };
};