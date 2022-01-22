import express from 'express';
import userController from '../controllers/user.controller.js'; 
import authCtrl from '../controllers/auth.controller.js'
// import {userSignupValidator } from '../validator';

const router = express.Router();

/* GET users listing. */

router.route('/auth')
    .get(authCtrl.test);

router.route('/auth/signup')
    .post(authCtrl.signup); 

router.route('/auth/signin')
    .post(authCtrl.signin); 

router.route('/auth/signout')
    .post(authCtrl.signout); 

router.route('/auth/:uderId')
    .post(userController.userById); 

export default router;