const express = require('express');
const router = express.Router();

const NewsControllers = require('../app/controllers/NewsControllers');
router.get('/:slug',NewsControllers.show);
router.get('/',NewsControllers.index);

module.exports = router;