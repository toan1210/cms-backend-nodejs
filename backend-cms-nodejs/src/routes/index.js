const newRouter = require('./news');
const site = require('./site');
const traditional = require('./traditional');
const longform = require('./longform');
const story = require('./story');
const admin = require('./admin');
const login = require('./login');
const arrayadvertisements = require('./arrayadvertisements');
const home = require('./home');
const auth = require("./../app/middlewares/authorization");
function route(app)
{
    app.use('/news',newRouter)
    app.use('/traditional',auth.CheckLogin,auth.restrictTo('admin','user'),traditional)
    app.use('/longform',auth.CheckLogin,auth.restrictTo('admin', 'user'),longform)
    app.use('/story',auth.CheckLogin,auth.restrictTo('admin','user'),story)
    app.use('/admin',auth.CheckLogin,auth.restrictTo('admin'),admin)
    app.use('/login',login)
    app.use('/home',home)
    app.use('/arrayadvertisements',auth.CheckLogin,auth.restrictTo('admin','user'),arrayadvertisements)
    app.use('/',site)
}
module.exports = route;