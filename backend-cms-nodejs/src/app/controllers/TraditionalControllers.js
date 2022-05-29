const Traditional = require('../models/Traditional');
const {mutipleMongooseToObject} = require('../../util/moongose')
const {mongooseToObject} = require('../../util/moongose');
class TraditionalControllers {
    index(req,res,next)
    {      
        Traditional.find({})
        .then(traditional => {
            res.render('traditional', {
                traditional:mutipleMongooseToObject(traditional.reverse())
            })
            // console.log(mutipleMongooseToObject(traditional));
        })
        .catch(next);
    }
    //Phần Thêm Mới Bài Viết
    add(req, res , next){
        const traditional = new Traditional({
          title:req.body.title,
          author:req.body.author,
          status:req.body.status,
          sumary:req.body.sumary,
          category:req.body.category,
          date:req.body.date,
          images:req.file.filename,
          traditional:req.body.traditional,
        //   images:{
        //     data: req.file.filename, 
        //     contentType: 'image/png' 
        //   },
          summary:req.body.summary,
          content:req.body.content,
        }) 
        traditional.save()
        .then(() => res.redirect('/traditional'))
        .catch(error => {
            console.log(error);
           })
       console.log("traditional",traditional);
      }
    create(req,res)
    {
        res.render('traditional/add');
    }
    //Phần Sửa Bài Viết
    edit(req,res,next)
    {      
        Traditional.findById(req.params.id)
        .then(traditional => {
            let years = traditional.date.getFullYear();
            let month = traditional.date.getMonth() + 1;
            let day = traditional.date.getDay();
            if(month < 10){
                month = "0" + month;
            }
            if(month < 10){
                day = "0" + day;
            }
            let date = years + "-" + month + "-" + day;
            res.render('traditional/edit', {
                traditional:mongooseToObject(traditional),
                "traditionaldate":date,
            })
        })
        .catch(next);
    }
    
    update(req,res,next) {
        Traditional.updateOne({_id: req.params.id}, req.body)
        .then(() =>  res.redirect('/traditional'))
        .catch(next);
    }
    
    // Phần Xóa Bài Viết
    delete(req,res,next) {
        Traditional.deleteOne({_id: req.params.id})
        .then(() =>  res.redirect('back'))
        .catch(next); 
    }
    
    api_traditional(req,res,next)
    {
      Traditional.find({}, function (err, traditional) {
           if(!err)
           {
               res.json(traditional);
               return;
           }
           else
           {
            res.status(400).json({error: 'ERROR'});
           }
          });
    }
    api_traditionaldetail(req,res,next)
    {
      console.log(req.params.id);
      Traditional.findById(req.params.id)
       .then(traditional => {
           res.json(traditional)
       })
       .catch(next);
    }

}
module.exports = new TraditionalControllers;