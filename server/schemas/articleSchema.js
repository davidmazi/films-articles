const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    imageURL: String,
    content: String,
    title: String,
    rating: Number,
    authorName: String,
    creationDate: Date,
    category: String
}, {collection: "articles"});

module.exports = articleSchema;