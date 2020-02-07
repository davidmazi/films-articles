const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean
}, {collection: 'users'});

module.exports = userSchema;