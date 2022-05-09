const Admin = require('../models/Admin');
const {mutipleMongooseToObject} = require('../../util/moongose')
const {mongooseToObject} = require('../../util/moongose');
class AdminControllers {
    index(req,res,next)
    {      
        Admin.find({})
        .then(admin => {
            res.render('admin', {
                admin:mutipleMongooseToObject(admin.reverse())
            })
            // console.log(mutipleMongooseToObject(traditional));
        })
        .catch(next);
    }
    //Phần Thêm Mới Bài Viết
    add(req, res , next){
        const admin = new Admin({
            username:req.body.username,
            password:req.body.password,
            category:req.body.category,
        }) 
        admin.save()
        .then(() => res.redirect('/admin'))
        .catch(error => {
            console.log(error);
           })
       console.log("admin",admin);
      }
    create(req,res)
    {
        res.render('admin/add');
    }
    //Phần Sửa Bài Viết
    edit(req,res,next)
    {      
        Admin.findById(req.params.id)
        .then(admin => {
            res.render('admin/edit', {
                admin:mongooseToObject(admin),
            })
        })
        .catch(next);
    }
    
    update(req,res,next) {
        Admin.updateOne({_id: req.params.id}, req.body)
        .then(() =>  res.redirect('/admin'))
        .catch(next);
    }
    
    // Phần Xóa Bài Viết
    delete(req,res,next) {
        Admin.deleteOne({_id: req.params.id})
        .then(() =>  res.redirect('back'))
        .catch(next); 
    }
    // api_traditional(req,res,next)
    // {
    //   Traditional.find({}, function (err, traditional) {
    //        if(!err)
    //        {
    //            res.json(traditional);
    //            return;
    //        }
    //        else
    //        {
    //         res.status(400).json({error: 'ERROR'});
    //        }
    //       });
    // }
    // api_traditionaldetail(req,res,next)
    // {
    //   console.log(req.params.id);
    //   Traditional.findById(req.params.id)
    //    .then(traditional => {
    //        res.json(traditional)
    //    })
    //    .catch(next);
    // }

}
module.exports = new AdminControllers;