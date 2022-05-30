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
      upload.fields([{name: 'news',maxCount:15},{name:'technology',maxCount:15},{name:'economy',maxCount:15},{name:'cultural',maxCount:15},{name:'entertain',maxCount:15},{name:'living',maxCount:15},{name:'video',maxCount:15},{name:'tourism',maxCount:15},{name:'brandstuff',maxCount:15},{name:'fashion',maxCount:15},{name:'sport',maxCount:15},{name:'cuisine',maxCount:15},
    ])
       console.log(req.files);
        const arrayadvertisements = new Arrayadvertisements({
          news:req.files.news[0].filename,
          technology:req.files.technology[0].filename,
          economy:req.files.economy[0].filename,
          cultural:req.files.cultural[0].filename,
          entertain:req.files.entertain[0].filename,
          living:req.files.living[0].filename,
          video:req.files.video[0].filename,
          tourism:req.files.tourism[0].filename,
          brandstuff:req.files.brandstuff[0].filename,
          fashion:req.files.fashion[0].filename,
          sport:req.files.sport[0].filename,
          cuisine:req.files.cuisine[0].filename,
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