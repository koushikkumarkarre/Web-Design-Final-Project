import express from 'express';
import userController from '../controllers/user.controller.js'
//Define a router variable to handle routes
const router = express.Router();

/* GET users listing. */

router.route('/')
    .get(userController.test)

/* GET users listing. */
router.route('/users')
    .get(userController.index) // This route is used to get all the todos from the Database
    .post(userController.save);// This route is used to save a todo to the database

router.route('/users/:userId')
    .get(userController.get) // This route is used to get a particular todo from the database based on the ID
    .put(userController.update) // This route is used to update a particular todo
    .delete(userController.remove);// This route is used to delete a particular todo

export default router;