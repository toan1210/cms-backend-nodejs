const newRouter = require('./news');
const site = require('./site');
const traditional = require('./traditional');
const longform = require('./longform');
const story = require('./story');
const admin = require('./admin');
const login = require('./login');
const home = require('./home');
function route(app)
{
    app.use('/news',newRouter)
    app.use('/traditional',traditional)
    app.use('/longform',longform)
    app.use('/story',story)
    app.use('/admin',admin)
    app.use('/login',login)
    app.use('/home',home)
    app.use('/',site)
}
module.exports = route;