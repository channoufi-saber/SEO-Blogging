const express = require("express");
const { preSignup, signup, signin, signout, requireSignin, forgotPassword, resetPassword } = require("../controllers/auth");
const { runValidation } = require("../validators");
const { userSignupValidator, userSigninValidator, forgotPasswordValidator, resetPasswordValidator } = require("../validators/auth");
const router = express.Router()

router.post('/pre-signup', userSignupValidator, runValidation, preSignup)
router.post('/signup', signup)
router.post('/signin', userSigninValidator, runValidation, signin)
router.get('/signout', signout)
router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);


module.exports = router