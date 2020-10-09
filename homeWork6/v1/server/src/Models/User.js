const Mongoose = require('mongoose');

const UserSchema = new Mongoose.Schema({

    name: String,
    emailAddress: String,
    message: String

});

const User = Mongoose.model('User', UserSchema);

module.exports = User;