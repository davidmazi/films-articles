const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require("cors");
const path = require("path");

const apiRoutes = require("./API/apiRoutes");

const app = express();

const originsWhitelist = [
    'http://localhost:4200',
    'http://localhost:8080'
];

const corsOptions = {
    origin: function (origin, callback) {
        const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credential: true
};

app.use(cors(corsOptions));

// Use Api routes in the App
app.use(
    "/api",
    apiRoutes);

app.use(
    express.static(path.join(__dirname, "../webapp", "dist", "moviesArticles")),
    bodyParser.urlencoded({
        extended: true
    }),
    bodyParser.json(),
);

app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../webapp', 'dist', "moviesArticles", 'index.html')), cors());

const port = process.env.PORT || 8080;


mongoose.connect('mongodb://localhost/moviesArticles', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Yay");
    app.listen(port, function () {
        console.log("Running API on port " + port);
    });
});