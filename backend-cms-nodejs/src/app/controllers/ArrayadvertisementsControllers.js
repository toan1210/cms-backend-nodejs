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
       console.log(req.files);
        const arrayadvertisements = new Arrayadvertisements({
          news:req.files.news[0].originalname,
          technology:req.files.technology[0].originalname,
          economy:req.files.economy[0].originalname,
          cultural:req.files.cultural[0].originalname,
          entertain:req.files.entertain[0].originalname,
          living:req.files.living[0].originalname,
          video:req.files.video[0].originalname,
          tourism:req.files.tourism[0].originalname,
          brandstuff:req.files.brandstuff[0].originalname,
          fashion:req.files.fashion[0].originalname,
          sport:req.files.sport[0].originalname,
          cuisine:req.files.cuisine[0].originalname,
        }) 
        arrayadvertisements.save()
        .then(() => res.redirect('/arrayadvertisements'))
        .catch(error => {
            console.log(error);
           })
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