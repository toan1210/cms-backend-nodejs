const Admin = require('../models/Admin');
const {mutipleMongooseToObject} = require('../../util/moongose')
const {mongooseToObject} = require('../../util/moongose');
class HomeControllers {
    home(req,res)
    {
        res.render('home');
    }
}
module.exports = new HomeControllers;