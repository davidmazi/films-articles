const router = require("express").Router();
const mongoose = require("mongoose");

const articleSchema = require("../../schemas/articleSchema");
const userController = require("../../controller/userController");
const authMiddleware = require("../../middleware/auth.middleware")
const utils = require("../../utils/utils")

const article = mongoose.model('articles', articleSchema);

router.use(utils.excluding(authMiddleware.isAuthAPI,["/findUser"], ["/findUser/"]));

router.route("/findUser").get(function (req, res, next) {
    userController.findUser(req.query.username, req.query.password, function (err, foundUser) {
        if (err) {
            res.json({
                status: "error",
                message: err
            })
        }
        if (foundUser.length !== 0) {
            res.cookie("Movies", foundUser[0]._id.toString())
            res.status(200).json({
                status: "success",
                message: "User exists",
                data: foundUser
            })
        } else {
            res.status(404).json({
                status: "not found",
                message: "User was not found",
            })
        }
    });
});

router.route("/findUser/:id").get(function (req, res, next) {
    userController.findUserById(req.params.id, function (err, foundUser) {
        if (err) {
            res.json({
                status: "error",
                message: err
            })
        }
        if (foundUser.length !== 0) {
            res.status(200).json({
                status: "success",
                message: "User exists",
                data: foundUser
            })
        } else {
            res.status(404).json({
                status: "not found",
                message: "User was not found",
            })
        }
    });
});

router.route("/articles").get(function (req, res) {
    article.find({}).sort({creationDate: -1}).exec(function (err, articles) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.status(200).json({
            status: "success",
            message: "articles retrieved successfully",
            data: articles
        });

    });
});

router.route("/newarticle").post(function (req, res) {
    let newArticle = new article(req.body);
    newArticle.save(function (err, article) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.status(200).json({status: "success", message: "article created successfully"});
        console.log(article.title + " saved to articles collection.");
    });
});

router.route("/deletearticle/:id").delete(function (req, res) {
        article.findByIdAndDelete(req.params.id, {useFindAndModify: false}, function (err) {
            if (err) {
                res.json({
                    status: "error",
                    message: err
                });
            }
            res.status(200).json({
                status: "success",
                message: "Article deleted!",
            });
        })
    }
);

module.exports = router;