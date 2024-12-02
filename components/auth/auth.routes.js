const express = require('express');
const router = express.Router();
const authController = require('./auth.controllers');

// Login route
router.get("/login",authController.renderLogin);
router.post('/login', authController.login);

// Register route
router.get("/register", authController.renderRegister);
router.post('/register', authController.register);

//Logout route
router.get("/logout", authController.logout);

module.exports = router;