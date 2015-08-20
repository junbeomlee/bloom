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

/*exports.signUp = function (req,res){

	var userSchema = require('../models/user.js');

	var newUser = new userSchema(req.body.reqData.user);

	userSchema.find({id : newUser.id}, function(err, users){

		if(err) console.log("err");
		else if(users.length) console.log("fail");
		else console.log("success");
		//newUser.user.insert({id:newUser.id, pwd:newUser.pwd});
	})

	res.send(req.body.reqData.user);

}*/
