var userController = require('../controller/userController.js');

exports.route = function(app) {

	app.post('/insert',userController.insert);
	app.get('/',function(req,res){
		res.send("test session");
		console.log(req.cookies);
		console.log(req.session);
	})
	//app.post('/signUp',userController.signUp);
	app.get('/logOut',function (req,res) {
		req.session.email="";
		var json={
			data:"you cannot access /login/*",
		}
		res.send(json);
	})
	app.get('/signIn',function (req,res) {
		//성공 했을경우에
		req.session.email="youCanLogin"; //req.session.email에 어떤 값이 있는지 없는지로 session을 체크한다
		var json={
			data:"you can access /login/something",
		}
		res.send(json);
	})
};
