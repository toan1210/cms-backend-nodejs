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



  
const LongformControllers = require('../app/controllers/LongformControllers');
//Phần Thêm Mới
router.post("/add",upload.single('images'),LongformControllers.add);
router.get("/create", LongformControllers.create);
//Phần sửa 
router.get('/:id/edit',LongformControllers.edit);
router.put('/:id',LongformControllers.update);
//Phần Xóa
router.delete('/:id',LongformControllers.delete);
//Trả về Api
router.get("/longformapi", LongformControllers.api_longform);
router.get('/:id',LongformControllers.api_longformdetail);

router.get('/',LongformControllers.index);

module.exports = router;