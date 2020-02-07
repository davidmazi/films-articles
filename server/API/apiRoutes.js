const router = require("express").Router();
const mongoose = require("mongoose");

const articleSchema = require("../../schemas/articleSchema");

const article = mongoose.model('articles', articleSchema);

router.get("/", function (req, res) {
    res.json({
        status: "API Works",
        message: "Yay"
    });
});

// example : /api/articles
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
            message: "employees retrieved successfully",
            data: articles
        });
    });
});

// example : /api/newarticle
router.route("/newarticle").post(function (req, res) {
    console.log(req.body);
    let newArticle = new article(req.body);
    console.log(req);
    newArticle.save(function (err, article) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
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

// Export API routes
module.exports = router;