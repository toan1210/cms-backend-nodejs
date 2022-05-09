const express = require('express');
const middleware = require('../app/middlewares/authorization').CheckLogin;
const router = express.Router();
const CoursesControllers = require('../app/controllers/CoursesControllers');
router.get('/create', middleware, CoursesControllers.create);
router.post('/store',CoursesControllers.store);
router.get('/:slug',CoursesControllers.show);
module.exports = router;