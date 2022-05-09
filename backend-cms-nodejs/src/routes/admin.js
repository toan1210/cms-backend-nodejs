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
const AdminControllers = require('../app/controllers/AdminControllers');
//Phần Thêm Mới
router.post("/add",upload.single('images'),AdminControllers.add);
router.get("/create", AdminControllers.create);
//Phần sửa 
router.get('/:id/edit',AdminControllers.edit);
router.put('/:id',AdminControllers.update);
//Phần Xóa
router.delete('/:id',AdminControllers.delete);

router.get('/',AdminControllers.index);

module.exports = router;