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
  const multipleUpload = upload.fields([{name: 'images',maxCount:10},{name:'images1',maxCount:10}])
const Arrayadvertisements = require('../app/controllers/ArrayadvertisementsControllers');
//Phần Thêm Mới
router.post("/add",multipleUpload,Arrayadvertisements.add);
router.get("/create", Arrayadvertisements.create);
//Trả về API
router.get("/arrayadvertisementsapi",Arrayadvertisements.api_arrayadvertisements);
// router.get('/:id',TraditionalControllers.api_traditionaldetail);


// router.get('/:id/edit',TraditionalControllers.edit);
// router.put('/:id',TraditionalControllers.update);
// router.delete('/:id',TraditionalControllers.delete);
router.get('/',Arrayadvertisements.index);
module.exports = router;