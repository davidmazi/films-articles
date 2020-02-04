const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors");

const apiRoutes = require("./API/apiRoutes");
const articleSchema = require("./schemas/articleSchema.js");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true
    }),
    cors()
);
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

//Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express"));

// Use Api routes in the App
app.use("/api", apiRoutes);
// Launch app to listen to specified port

const article = mongoose.model('articles', articleSchema)

const newArticle = new article({
    imageURL: 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219414/JM2_OnLine_1080x1350_TSR_HERO_RD3DDCIMX_01.jpg',
    content: "Content",
    title: "Title",
    rating: 6,
    authorName: "Author",
    creationDate: Date.now(),
    category: "Jumanji"
})

mongoose.connect('mongodb://localhost/moviesArticles', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Yay");
    app.listen(port, function() {
        console.log("Running API on port " + port);
    });
     // newArticle.save(function (err, article) {
     //     if (err) return console.error(err);
     //     console.log(article.title + " saved to articles collection.");
     // })
});