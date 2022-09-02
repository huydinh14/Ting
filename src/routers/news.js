const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewController');

// newsController.index
router.get('/ok', newsController.show);

router.use('/', newsController.index);

module.exports = router;
