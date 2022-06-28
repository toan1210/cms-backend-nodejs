const express = require('express');
const router = express.Router();
const StoryControllers = require('../app/controllers/StoryControllers');
const path = require('path');
const multer = require('multer');
const auth = require("./../app/middlewares/authorization");
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
router.get("/create",auth.CheckLogin,auth.restrictTo('admin','user'),StoryControllers.create);
//Phần sửa 
router.get('/:id/edit',auth.CheckLogin,auth.restrictTo('admin','user'),StoryControllers.edit);
router.put('/:id',auth.CheckLogin,auth.restrictTo('admin','user'),StoryControllers.update);
//Phần Xóa
router.delete('/:id',auth.CheckLogin,auth.restrictTo('admin','user'),StoryControllers.delete);
// Trả về API
router.get("/storyapi", StoryControllers.api_story);
router.get('/:id',StoryControllers.api_storydetail);

router.get('/',auth.CheckLogin,auth.restrictTo('admin','user'),StoryControllers.index);

module.exports = router;