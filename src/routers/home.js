const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');

// HomeController.js
router.get('/', homeController.show);

module.exports = router;
