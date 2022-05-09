const Admin = require('../models/Admin');
const dayjs = require("dayjs");
const jwt = require('jsonwebtoken');
const {mutipleMongooseToObject} = require('../../util/moongose')
class SiteControllers {
    login(req,res,next)
    {      
        var username = req.body.username;
        var password = req.body.password;
        Admin.findOne({
            username:username,
            password:password,
        })
        .then(admin=>{
            if(admin){
               var token = jwt.sign({
                   _id:admin._id
               }, 'mk')

                res.cookie("token", token, {
                    secure: process.env.NODE_ENV !== "development",
                    httpOnly: true,
                    expires: dayjs().add(30, "days").toDate(),
                });
            //    return res.json({
            //        message: "thành công",
            //        token: token,
            //    })
                res.render('home');
            }
            else
            {
                res.render('login/login/login');
                // return res.json("Thất Bại");
            }
        })
        .catch(err =>{
            res.status(500).json('Lỗi Server')
        })
        // res.render('login/login/login');
        //     Course.find({})
        // .then(courses => {
           
        //     res.render('home', {
        //         courses:mutipleMongooseToObject(courses)
        //     })
        // })
        // .catch(next);
    }
    index(req,res,next)
    {      
       res.render('login/login/login')
    }
    // index_use_api(req,res,next)
    // {
    //     Course.find({}, function (err, courses) {
    //        if(!err)
    //        {
    //            res.json(courses);
    //         //    res.render('home');
    //            return;
    //        }
    //        else
    //        {
    //         res.status(400).json({error: 'ERROR'});
    //        }
    //       });
    // }
}
module.exports = new SiteControllers;