const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const aws = require('aws-sdk');
const port = 3000;

const route = require('./routers');
const db = require('./config/db')
const cookieParser = require('cookie-parser');
const validator = require('express-validator');
const session = require('express-session');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const passport = require('passport');
require("dotenv").config();
require("./passport/passport-local");

// connect db
db.connect();

// set mongoose configuration
mongoose.Promise = global.Promise;

// --config express--
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(morgan('combined'));
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.use(cookieParser());
app.use(validator());
app.use(session({
    secret: 'thisisasecrectkey',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 6000}
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
//

//--router--
route(app);
//--

// s3.createBucket({
//     Bucket: 'my-butket-from-sdk',
// }, (error, success) => {
//     if(error){
//         console.log("Error");
//     }
//     console.log("Success");
// })

// s3.putObject({
//     Bucket: 'my-butket-from-sdk',
//     Key: 'package.json',
// })

var server = app.listen(3000,  "127.0.0.1", function () {
 
    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
 
});
