const express = require("express");
const router = express.Router();
const path = require("path");
const checklogin = require("../app/middlewares/authorization").CheckLogin; // vi dutest check đã login hay chưa
const SiteControllers = require("../app/controllers/SiteControllers"); //vậy là xong rồi đúng ko ờ
router.post("/", SiteControllers.login);

module.exports = router;
