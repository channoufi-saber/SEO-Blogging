const express = require("express");
const router = express.Router();

const { requireSignin, adminMiddleware } = require("../controllers/auth");
const { runValidation } = require("../validators");
const { categoryCreateValidator } = require("../validators/category");
const { create } = require("../controllers/category");

router.post('/category', categoryCreateValidator, runValidation, requireSignin, adminMiddleware, create);
module.exports = router