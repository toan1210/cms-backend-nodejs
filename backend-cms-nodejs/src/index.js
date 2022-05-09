const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const route =require('./routes/index');
var cors = require('cors');
const app = express();
const port = 4000;
const db = require("./config/db/index");
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const multer = require('multer');
const fs = require('fs');
const { title } = require('process');
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken');


app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('combined'));

app.use(methodOverride('_method'))
db.connect();
//Template engine 
app.engine('hbs', handlebars(
  {
    extname:'.hbs'
  }
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))
route(app);
app.post('/upload',multipartMiddleware,(req, res , next) => {
  try {
    fs.readFile(req.files.upload.path, function (err, data) {
        var newPath = __dirname + '/public/images/' + req.files.upload.name;
        fs.writeFile(newPath, data, function (err) {
            if (err) console.log({err: err});
            else {
                console.log(req.files.upload.originalFilename);
            //     imgl = '/images/req.files.upload.originalFilename';
            //     let img = "<script>window.parent.CKEDITOR.tools.callFunction('','"+imgl+"','ok');</script>";
            //    res.status(201).send(img);
                let fileName = req.files.upload.name;
                let url = '/images/'+fileName;                    
                let msg = 'Upload successfully';
                let funcNum = req.query.CKEditorFuncNum;
                console.log({url,msg,funcNum});
                res.status(201).send("<script>window.parent.CKEDITOR.tools.callFunction('"+funcNum+"','"+url+"','"+msg+"');</script>");
            }
        });
    });
   } 
       catch (error) {
       console.log(error.message);
   }
}),
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})