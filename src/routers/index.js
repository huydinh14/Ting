const newRouter = require('./news');
const signupRouter = require('./signup');
const homeRouter = require('./home');

function route(app) {
    app.use('/news', newRouter);
    app.use('/signup', signupRouter);
    app.use('/home', homeRouter);
}

module.exports = route;
