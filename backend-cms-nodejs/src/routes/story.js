const express = require('express');
const router = express.Router();
const StoryControllers = require('../app/controllers/StoryControllers');
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
//Phần Thêm Mới
router.post("/add",upload.single('images'),StoryControllers.add);
router.get("/create", StoryControllers.create);
//Phần sửa 
router.get('/:id/edit',StoryControllers.edit);
router.put('/:id',StoryControllers.update);
//Phần Xóa
router.delete('/:id',StoryControllers.delete);

router.get('/',StoryControllers.index);

module.exports = router;