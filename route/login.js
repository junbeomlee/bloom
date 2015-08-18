exports.route = function(app) {

  app.use(function (req,res,next) {
    console.log();
    if(req.session.email){
      return next();
    }
    res.send("needlogin");
  })

  app.get('/login/something',function (req,res) {
    res.send("login/something auth");
  })

  app.get('/login/soemething2',function (req,res) {

  })
};
