const express = require('express');
const router = express.Router();
const homeControllers = require('../app/controllers/homeControllers');
const auth = require("./../app/middlewares/authorization");
router.get('/',auth.CheckLogin,auth.restrictTo('admin','user'), homeControllers.home);
module.exports = router;