const Arrayadvertisements = require('../models/Arrayadvertisements');
const {mutipleMongooseToObject} = require('../../util/moongose')
const {mongooseToObject} = require('../../util/moongose');
const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
      cb(null,'src/public/images'); 
    },
    filename:(req,file,cb) => {
      console.log(file);
      cb(null,Date.now() + path.extname(file.originalname)); 
    }
  });
  const upload = multer({storage:storage})
class ArrayadvertisementsControllers {
    index(req,res,next)
    {      
        Arrayadvertisements.find({})
        .then(arrayadvertisements => {
            res.render('arrayadvertisements', {
                arrayadvertisements:mutipleMongooseToObject(arrayadvertisements.reverse())
            })
        })
        .catch(next);
    }
     //Phần Thêm Mới Bài Viết
     add(req, res , next){
        const arrayadvertisements = new Arrayadvertisements({
            images:req.files.images[0].originalname,
            images1:req.files.images1[0].originalname,
        }) 
        arrayadvertisements.save()
        .then(() => res.redirect('/arrayadvertisements'))
        .catch(error => {
            console.log(error);
           })
           console.log("ascascas",req.files.images1[0].originalname);
      }
      create(req,res)
        {
           res.render('arrayadvertisements/add');
        }

    //Phần Sửa Bài Viết

    // edit(req,res,next)
    // {      
    //     Longform.findById(req.params.id)
    //     .then(longform => {
    //         let years = longform.date.getFullYear();
    //         let month = longform.date.getMonth() + 1;
    //         let day = longform.date.getDay();
    //         if(month < 10){
    //             month = "0" + month;
    //         }
    //         if(month < 10){
    //             day = "0" + day;
    //         }
    //         let date = years + "-" + month + "-" + day;
    //         res.render('longform/edit', {
    //             longform:mongooseToObject(longform),
    //             "longformdate":date,
    //         })
    //     })
    //     .catch(next);
    // }
    
    // update(req,res,next) {
    //     Longform.updateOne({_id: req.params.id}, req.body)
    //     .then(() =>  res.redirect('/longform'))
    //     .catch(next);
    // }

    // delete(req,res,next) {
    //     Longform.deleteOne({_id: req.params.id})
    //     .then(() =>  res.redirect('back'))
    //     .catch(next); 
    // }
    //Trả về API 
    api_arrayadvertisements(req,res,next)
    {
        Arrayadvertisements.find({}, function (err, arrayadvertisements) {
           if(!err)
           {
               res.json(arrayadvertisements);
               return;
           }
           else
           {
            res.status(400).json({error: 'ERROR'});
           }
          });
    }
    // api_longformdetail(req,res,next)
    // {
    //   Longform.findById(req.params.id)
    //    .then(longform => {
    //        res.json(longform)
    //    })
    //    .catch(next);
    // }


}
module.exports = new ArrayadvertisementsControllers;