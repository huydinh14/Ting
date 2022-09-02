const express = require('express');
const router = express.Router();
const passport = require('passport');

const signUpController = require('../app/controllers/SignUpController');

//router.get('/signup', signUpController.show);
router.post('/register', 
passport.authenticate('local.signup', {
                successRedirect: '/home',
                failureRedirect: '/signup',
                failureFlash: true,
            }));
router.get('/', signUpController.show);

module.exports = router;