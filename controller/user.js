var mongoose = require('mongoose')

exports.insert = function (req, res) {
	// body...
	var userSchema = require('../models/user.js');

	var newUser = new userSchema(req.body.reqData.user);
	newUser.save(function(err){
		console.log(err);
	});
	res.send(req.body.reqData.user);
}

exports.signUp = function (req,res){

}