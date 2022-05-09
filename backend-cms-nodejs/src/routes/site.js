const express = require('express');
const router = express.Router();

const SiteControllers = require('../app/controllers/SiteControllers');
// const checklogin = require('../app/middlewares/authorization').CheckLogin; 
// router.get('/indexuseapi',SiteControllers.index_use_api);
// router.post('/',checklogin,SiteControllers.login);
router.post('/home',SiteControllers.login);
router.get('/',SiteControllers.index);
module.exports = router;