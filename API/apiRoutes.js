const router = require("express").Router();
const mongoose = require("mongoose")

const articleSchema = require("../schemas/articleSchema");

const article = mongoose.model('articles', articleSchema)

router.get("/", function (req, res) {
    res.json({
        status: "API Works",
        message: "Yay"
    });
});

// example : /api/articles
router.route("/articles").get(function (req, res) {
    article.find({},function (err, articles) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "employees retrieved successfully",
            data: articles
        });
    });
});

// Export API routes
module.exports = router;