const mongoose = require("mongoose");

const userSchema = require("../schemas/userSchema");
const user = mongoose.model('users', userSchema);

module.exports.findUser = function (username, password, callback) {
    user.find({name: username, password: password}, function (err, foundUser) {
        if (err) return callback(err, null);
        return callback(null, foundUser);
    })
}

module.exports.findUserById = function(id, callback) {
    user.findById(id, function(err, foundUser){
        if(err) return callback(err, null);
        return callback(null, foundUser);
    })
}