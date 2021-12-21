const authController = require('../controllers/authcontroller.js');
module.exports = function(app,passport) {
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/api-docs',
            failureRedirect: '/signup'
        }
    ));
    app.get('/api-docs', isLoggedIn);
    app.get('/logout', authController.logout);
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/api-docs',
            failureRedirect: '/signin'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }

    app.get('/auth/google',
        passport.authenticate('google', {
                scope:
                    ['email', 'profile']
            }
        ));

    app.get('/google/callback',
        passport.authenticate('google', {
            successRedirect: '/api-docs',
            failureRedirect: '/auth/failure'
        }));

    /*app.get("/google/callback",(req, res, next)=>{
        passport.authenticate("google",(err, user, info) =>{
            if (err) {
                return res.status(400).json({express:err})
            }

            return res.status(200).json({express:user})

        })(req, res, next)
    })*/

    app.get('/auth/failure', (req, res) => {
        res.send('erreur');
    });

    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { successRedirect: '/api-docs',
            failureRedirect: '/login' }));


}
