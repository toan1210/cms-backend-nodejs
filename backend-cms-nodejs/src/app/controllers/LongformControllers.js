const Longform = require('../models/Longform');
const {mutipleMongooseToObject} = require('../../util/moongose')
const {mongooseToObject} = require('../../util/moongose');
class LongformControllers {
    index(req,res,next)
    {      
        Longform.find({})
        .then(longform => {
            res.render('longform', {
                longform:mutipleMongooseToObject(longform.reverse())
            })
        })
        .catch(next);
    }
     //Phần Thêm Mới Bài Viết
     add(req, res , next){
        const longform = new Longform({
          title:req.body.title,
          author:req.body.author,
          status:req.body.status,
          category:req.body.category,
          date:req.body.date,
          images:req.file.filename,
          longform:req.body.longform,
        //   images:{
        //     data: req.file.filename, 
        //     contentType: 'image/png' 
        //   },
        sumary:req.body.sumary,
          content:req.body.content,
        }) 
        longform.save()
        .then(() => res.redirect('/longform'))
        .catch(error => {
            console.log(error);
           })
       console.log("longform",longform);
      }
      create(req,res)
        {
           res.render('longform/add');
        }

    //Phần Sửa Bài Viết

    edit(req,res,next)
    {      
        Longform.findById(req.params.id)
        .then(longform => {
            let years = longform.date.getFullYear();
            let month = longform.date.getMonth() + 1;
            let day = longform.date.getDay();
            if(month < 10){
                month = "0" + month;
            }
            if(month < 10){
                day = "0" + day;
            }
            let date = years + "-" + month + "-" + day;
            res.render('longform/edit', {
                longform:mongooseToObject(longform),
                "longformdate":date,
            })
        })
        .catch(next);
    }
    
    update(req,res,next) {
        Longform.updateOne({_id: req.params.id}, req.body)
        .then(() =>  res.redirect('/longform'))
        .catch(next);
    }

    delete(req,res,next) {
        Longform.deleteOne({_id: req.params.id})
        .then(() =>  res.redirect('back'))
        .catch(next); 
    }
    //Trả về API 
    api_longform(req,res,next)
    {
        Longform.find({}, function (err, longform) {
           if(!err)
           {
               res.json(longform);
               return;
           }
           else
           {
            res.status(400).json({error: 'ERROR'});
           }
          });
    }
    api_longformdetail(req,res,next)
    {
      Longform.findById(req.params.id)
       .then(longform => {
           res.json(longform)
       })
       .catch(next);
    }


}
module.exports = new LongformControllers;