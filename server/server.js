const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose');
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();

module.exports.app = app;


const originsWhitelist = [
    'http://localhost:4200',
    'http://localhost:8080'
];

const corsOptions = {
    origin: function (origin, callback) {
        const isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};

app.use(cors(corsOptions),
    bodyParser.urlencoded({
        extended: true
    }),
    bodyParser.json(),
    cookieParser()
);

app.use(routes);

const port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/moviesArticles', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    app.listen(port, function () {
        console.log("Running Server on port " + port);
    });

});