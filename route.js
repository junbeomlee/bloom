var userController = require('./controller/userController.js');

exports.route = function(app) {

	app.get('/insert',userController.insert);
	app.get('/',function(req,res){
		res.send("test session");
		console.log(req.cookies);
		console.log(req.session);
	})
};