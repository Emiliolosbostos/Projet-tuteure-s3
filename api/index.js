const express = require("express");
const app = express();
//later
const bodyParser = require("body-parser");
//ADD Routers
const usersRoutes = require("./routes/users.route");
const questionsRoutes = require("./routes/questions.route");
//ADD SWAGGER MODULES
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
//ADD dotenv
const dotenv = require("dotenv");
dotenv.config();

//ADD MODELS
//const Post = require("./services/posts.service");
const sequelize  = require("./config/db2.config");


// Static Files
app.use(express.static('public'))
app.use('/img', express.static(__dirname + 'public/img'))
// Templating Engine
//app.set('views', './views')
//app.set('view engine', 'ejs')
//enable CORS

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


//later (this is a middleware)
app.use(bodyParser.json());
/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "API PTUT",
            description: "API documentation",
            contact: {
                name: "ABDELMLEK Sami",
            },
            servers: [`http://localhost:${process.env.PORT}/`],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};



//app.use("/posts",postsRoutes);


//Synchronize Sequelize
//Post.hasMany(Comment);
//Comment.belongsTo(Post);

sequelize.sync()
    .then(console.log("Sequelize synchronized successfully"))
    .catch((error)=>{console.log("Sequelize failed synchronizing ", error)})

// --------------------------------------------------------------------------
// -------------------------------- PASSPORT --------------------------------
// --------------------------------------------------------------------------

const passport = require('passport')
const session = require('express-session')
app.get('/', function(req, res) {
    //res.send('Welcome to Passport with Sequelize');
    res.send('passport sécurisé de ouf');
});
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: 'td8',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

//Models
const models = require("./models");
//Sync Database
models.sequelize.sync().then(function() {
    console.log('La base de données fonctionne bien')
}).catch(function(err) {
    console.log(err, "Quelque chose s'est mal passé avec la mise à jour de la base de données!")
});

const exphbs = require('express-handlebars')

app.set('views', './views')
app.set('view engine', '.hbs');
app.engine(
    'hbs',
    exphbs({
        extname: ".hbs",
        defaultLayout: "",
        layoutsDir: "",
    })
);

const authRoute = require('./routes/auth')(app,passport);
const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs" ,swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */
app.use("/users",usersRoutes);
app.use("/questions",questionsRoutes);


require('./config/passport/passport.js')(passport,models.user);

app.listen(process.env.PORT,()=>{
    console.log(`Le serveur ecoute sur le port ${process.env.PORT}`);
});








