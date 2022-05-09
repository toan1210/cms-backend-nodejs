const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/moongose');
const fs = require('fs');
class CoursesControllers {
    show(req,res,next)
    {
       Course.findOne( {slug:req.param.slug})
       .then(course => {
           res.json(course)
       })
       .catch(next);
    }
    // [GET] /courses/create
    create(req,res,next){
        res.render('courses/create');
    }

    // [POST] /courses/store
    store(req, res , next){
       const course = new Course(req.body)
       course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            })
    }
    upload(req, res , next){
        console.log("ok2");
        // try {
        //   fs.readFile(req.files.upload.path, function (err, data) {
        //       var newPath = __dirname + '/public/images/' + req.files.upload.name;
        //       fs.writeFile(newPath, data, function (err) {
        //           if (err) console.log({err: err});
        //           else {
        //               console.log(req.files.upload.originalFilename);
        //           //     imgl = '/images/req.files.upload.originalFilename';
        //           //     let img = "<script>window.parent.CKEDITOR.tools.callFunction('','"+imgl+"','ok');</script>";
        //           //    res.status(201).send(img);
                   
        //               let fileName = req.files.upload.name;
        //               let url = '/images/'+fileName;                    
        //               let msg = 'Upload successfully';
        //               let funcNum = req.query.CKEditorFuncNum;
        //               console.log({url,msg,funcNum});
                     
        //               res.status(201).send("<script>window.parent.CKEDITOR.tools.callFunction('"+funcNum+"','"+url+"','"+msg+"');</script>");
        //           }
        //       });
        //   });
        //  } catch (error) {
        //      console.log(error.message);
        //  }
      }
}
module.exports = new CoursesControllers;