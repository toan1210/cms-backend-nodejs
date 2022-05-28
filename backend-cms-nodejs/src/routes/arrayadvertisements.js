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
  const multipleUpload = upload.fields([{name: 'news',maxCount:15},{name:'technology',maxCount:15},{name:'economy',maxCount:15},{name:'cultural',maxCount:15},{name:'entertain',maxCount:15},{name:'living',maxCount:15},{name:'video',maxCount:15},{name:'tourism',maxCount:15},{name:'brandstuff',maxCount:15},{name:'fashion',maxCount:15},{name:'sport',maxCount:15},{name:'cuisine',maxCount:15},
])
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