//load bcrypt
const bCrypt = require('bcrypt');
module.exports = function(passport,user){
    const User = user;
    const LocalStrategy = require('passport-local').Strategy;
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        // findbypk ==> trouver l'utilisateur avec la clé primaire
        User.findByPk(id).then(function(user) {
            if(user){
                done(null, user.get());
            }
            else{
                done(user.errors,null);
            }
        });
    });
    //Nous déclarons ici quels champs de requête (req) sont nos usernameField et passwordField (variables de passeport)
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        //Dans cette fonction, nous allons gérer le stockage des détails d'un utilisateur
        function(req, email, password, done){
            //nous ajoutons notre fonction de génération de mot de passe haché à l'intérieur de la fonction de rappel
            let generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            // en utilisant le modèle utilisateur Sequelize que nous avons initialisé plus tôt,
            // nous vérifions si l'utilisateur existe déjà, et sinon nous l'ajoutons
            User.findOne({where: {emailId:email}}).then(function(user){
                if(user)
                {
                    return done(null, false, {message : 'Cette email est déja pris'} );
                }
                else
                {
                    let userPassword = generateHash(password);
                    let data =
                        { emailId:email,
                            password:userPassword,
                            firstName: req.body.firstname,
                            lastName: req.body.lastname
                        };
                    // User.create() est une méthode Sequelize pour ajouter de nouvelles entrées à la base de données.
                    // Notez que les valeurs de l'objet de données sont obtenues à partir de l'objet req.body qui
                    // contient l'entrée de notre formulaire d'inscription
                    User.create(data).then(function(newUser,created){
                        if(!newUser){
                            return done(null,false);
                        }
                        if(newUser){
                            return done(null,newUser);
                        }
                    });
                }
            });
        }
    ));
    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
        {
            // par défaut, la stratégie locale utilise le nom d'utilisateur et le mot de passe,
            // nous remplacerons le nom d'utilisateur par l'e-mail
            usernameField : 'email',
            passwordField : 'password',
            passReqToCallback : true // nous permet de renvoyer l'ensemble de la requête au callback
        },
        function(req, email, password, done) {
            let User = user;
            let isValidPassword = function(userpass,password){
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({ where : { emailId: email}}).then(function (user) {
                if (!user) {
                    return done(null, false, { message: 'L\'e-mail n\'existe pas' });
                }
                if (!isValidPassword(user.password,password)) {
                    return done(null, false, { message: 'Mot de passe incorrect.' });
                }
                let userinfo = user.get();
                return done(null,userinfo);
            }).catch(function(err){
                    console.log("Error:",err);
                    return done(null, false, { message: 'Une erreur s\'est produite lors de votre connexion' });
                    });
                }
            ));

    // GOOGLE OAUTH
    const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
    passport.use(new GoogleStrategy({
            clientID: "26179771031-6ksf9e087ff9s9lhhh58uqc1sphraqqu.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/google/callback",
            passReqToCallback: true
        },
        function(request, accessToken, refreshToken, profile, done) {
            //User.findOrCreate({googleId: profile.id}, function (err, profile) {
                return done(null, profile);
            //});
        }
    ));


    //FACEBOOK OAUTH
    var FacebookStrategy = require('passport-facebook').Strategy;

    passport.use(new FacebookStrategy({
            clientID: 285363936936575,
            clientSecret: "58853484b5c0a50407094793e34695fe",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        function(accessToken, refreshToken, profile, done) {
            //User.findOrCreate({ facebookId: profile.id}, function(err, user) {
                //if (err) { return done(err); }
                return done(null, profile);
            //});
        }
    ));
}