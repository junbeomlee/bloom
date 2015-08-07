var userController = require('./controller/user.js');

exports.route = function(app) {

	app.get('/insert',userContoller.insert);
	app.get('/',function(req,res){
		res.send("/   request");
	})
	app.get('/userRemove',userController.remove);
	app.get('/send',function (req,res) {
		console.log("send");
	});
	app.get('/userSignUp', userController.signUp);
};