var userController = require('../controller/userController.js');

exports.route = function(app) {

	app.get('/insert',userController.insert);
	app.get('/',function(req,res){
		res.send("test session");
		console.log(req.cookies);
		console.log(req.session);
	})
	app.get('/logOut',function (req,res) {
		req.session.email="";
		res.send("you cannot access /login/*");
	})
	app.get('/signIn',function (req,res) {
		//성공 했을경우에
		req.session.email="youCanLogin"; //req.session.email에 어떤 값이 있는지 없는지로 session을 체크한다
		res.send("you can access /login/something");
	})
};
