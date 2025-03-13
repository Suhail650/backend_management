const express = require("express");
const authController = require("../controllers/authController");
const adminMiddleware = require("../middlware/adminMiddleware");

const router = express.Router();

// Login route
router.post("/login",adminMiddleware, authController.login);

module.exports = router;
