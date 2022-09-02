const express = require('express');
const router = express.Router();

const signUpController = require('../app/controllers/SignUpController');

//router.get('/signup', signUpController.show);
router.post('/register', signUpController.post);
router.get('/', signUpController.show);

module.exports = router;