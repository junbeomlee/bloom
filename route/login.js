exports.route = function(app) {

  app.use(function (req,res,next) {
    console.log();
    if(req.session.email){
      return next();
    }
    var json={
      data:"needlogin"
    }
    res.send(json);
  })

  app.get('/login/something',function (req,res) {
    var json={
      data:"login/something auth"
    }
    res.send(json);
  })

  app.get('/login/soemething2',function (req,res) {

  })
};
