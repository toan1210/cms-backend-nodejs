const express = require('express');
const router = express.Router();
const path = require('path');
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

  const auth = require("./../app/middlewares/authorization");

  
const LongformControllers = require('../app/controllers/LongformControllers');
//Phần Thêm Mới
router.post("/add",upload.single('images'),LongformControllers.add);
router.get("/create",auth.CheckLogin,auth.restrictTo('admin','user'), LongformControllers.create);
//Phần sửa 
router.get('/:id/edit',auth.CheckLogin,auth.restrictTo('admin','user'),LongformControllers.edit);
router.put('/:id',auth.CheckLogin,auth.restrictTo('admin','user'),LongformControllers.update);
//Phần Xóa
router.delete('/:id',auth.CheckLogin,auth.restrictTo('admin','user'),LongformControllers.delete);
//Trả về Api
router.get("/longformapi", LongformControllers.api_longform);
router.get('/:id',LongformControllers.api_longformdetail);

router.get('/',auth.CheckLogin,auth.restrictTo('admin','user'),LongformControllers.index);

module.exports = router;