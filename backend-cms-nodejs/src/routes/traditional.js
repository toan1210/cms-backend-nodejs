const express = require('express');
const router = express.Router();
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
const TraditionalControllers = require('../app/controllers/TraditionalControllers');

//binh luan
  //post binh luan
router.post('/comments', TraditionalControllers.addComment)

//get binh luan
router.get('/comments', TraditionalControllers.getAllComments)
//get comment by post id
router.get('/comments/:idPost', TraditionalControllers.getCommentByPostId)

//Phần Thêm Mới
router.post("/add",upload.single('images'),TraditionalControllers.add);
router.get("/create",auth.CheckLogin,auth.restrictTo('admin','user'),TraditionalControllers.create);
//Trả về API
router.get("/traditionalapi", TraditionalControllers.api_traditional);
router.get('/:id',TraditionalControllers.api_traditionaldetail);


router.get('/:id/edit',auth.CheckLogin,auth.restrictTo('admin','user'),TraditionalControllers.edit);
router.put('/:id',auth.CheckLogin,auth.restrictTo('admin','user'),TraditionalControllers.update);
router.delete('/:id',auth.CheckLogin,auth.restrictTo('admin','user'),TraditionalControllers.delete);
router.get('/',auth.CheckLogin,auth.restrictTo('admin','user'),TraditionalControllers.index);


module.exports = router;