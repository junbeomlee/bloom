var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
	id: String,
	pwd: String
},{collection: 'user'});

module.exports = mongoose.model('user', userSchema);