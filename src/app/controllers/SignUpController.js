
class SignUpController{
    show(req, res){
        res.render('signup')
    }

    post(req, res, next, passport){
            passport.authenticate('local.signup', {
                successRedirect: '/home',
                failureRedirect: '/signup',
                failureFlash: true,
            });
            var username = req.body.username;
            var password = req.body.password;
            console.log("post received: %s %s", username, password);
    }
}

module.exports = new SignUpController();