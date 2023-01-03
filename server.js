import express from "express"
import UserRoute from"./Routes/User.js"
import mongoose from"mongoose";
import PostRoute from "./Routes/post.js"
import CommentaireRoute from "./Routes/Commentaire.js";
import MessageRoute from "./Routes/Message.js";
import dotenv from"dotenv" ;
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import session from 'express-session'
import passport from 'passport';
import Google from 'passport-google-oauth2'
import Facebook from 'passport-facebook'
const g =Google.Strategy;
const facebook = Facebook.Strategy;

const options ={
  definition: {
    openapi : '3.0.0',
    info :{
      title :'Bizoz Project ',
      version : '1.0.0'
    },
    servers:[
      {
        url: 'http://localhost:5001/'
      }
    ]
  },
  apis: ["./Routes/*.js"],
}

const swaggerSpec = swaggerJSDoc(options)

dotenv.config({path:'./config/config.env'});

const app = express();
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use('/img',express.static('public/images'))

app.use(express.urlencoded({extended: true, limit: '50mb'}));

const databaseName = "final"; // L'@ du serveur
const port = process.env.PORT || 9090; // Le port du serveur

  mongoose.set("debug", true);
  mongoose.Promise = global.Promise;

  mongoose
    .connect(`mongodb://127.0.0.1:27017/${databaseName}`)
    .then(() => {
      console.log(`connected to ${databaseName}`);
    })
    .catch((err) => {
      console.log(err);
    });

app.use(express.json());

app.use("/user", UserRoute);
app.use("/Post",PostRoute);
app.use("/Commentaire",CommentaireRoute);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.use("/dis",MessageRoute)
app.use(session({
  secret: "secret",
  resave: false ,
  saveUninitialized: true ,
}))
app.use(passport.initialize()) // init passport on every route call
app.use(passport.session())    //allow passport to use "express-session"
const GOOGLE_CLIENT_ID = "825384301124-ildkjgm6nklsd5h1e71j33ac9apatd8i.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"
var authUser = (request,accessToken,refreshToken,profile, done) => {
  return done(null, profile);
}

var facebookuser = (request,accessToken,refreshToken,profile, done) => {
  return done(null, profile);
}
passport.use(new g({
  clientID:     GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5001/auth/google",
  passReqToCallback   : true
}, authUser));
passport.use(new facebook({
  clientID:     "5511333658903319",
  clientSecret: "c090e02b8ff5287c32a37f826e968159",
  callbackURL: "http://localhost:5001/facebook/callback",
  profileFields:[
  "displayName",
  "email",
  "gender",
  "picture.type(large)"]
}, facebookuser));
app.get("/facebook", (req, res) => {
  res.render("facebook")
})
app.get('/facebook/callback',
    passport.authenticate( 'facebook', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
}));
app.get('/auth/facebook',
  passport.authenticate('facebook', { scope:
      [ 'email' ] }
));

passport.serializeUser(function (user, done){ 
  console.log(user)
  
  return done(null, user.id)
} )

passport.deserializeUser(function (user, done) {
 
 return done (null, user)
}) 


app.set("View engine","ejs")


/* Demarrer le serveur a l'ecoute des connexions */
app.listen(port, () => {
  console.log(`Server running at http://localhost:5001/`);
});



app.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));
app.get('/news',   )

app.get('/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/dashboard',
        failureRedirect: '/login'
}));

//Define the Login Route
app.get("/login", (req, res) => {
    res.render("login.ejs")
})