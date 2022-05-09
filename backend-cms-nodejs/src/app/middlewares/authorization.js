const jwt = require('jsonwebtoken');

module.exports.CheckLogin = function(req, res, next) {
    
    if(!req.cookies || !req.cookies.token) {
        return res.json({
            code: 401,
            message: "Sai",
            success: false
        })
        res.render('login/login/login')
    //    return res.render('/login/login/login');
    }
    var decoded = jwt.verify(req.cookies.token, 'mk');
    if (!decoded._id) { 
        return res.json({
            code: 401,
            message: "Đúng",
            success: false
        })
        //return res.render('../../resources/views/home.hbs');
        // return res.render('/login/login/login');
        
    }
    next();
}