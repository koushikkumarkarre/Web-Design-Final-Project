import express from 'express';
import courseController from '../controllers/course.controller.js'
//Define a router variable to handle routes
const router = express.Router();

/* GET users listing. */

router.route('/')
    .get(courseController.test)

/* GET users listing. */
router.route('/courses')
    .get(courseController.index) // This route is used to get all the todos from the Database
    .post(courseController.save);// This route is used to save a todo to the database

router.route('/courses/:courseId')
    .get(courseController.get) // This route is used to get a particular todo from the database based on the ID
    .put(courseController.update) // This route is used to update a particular todo
    .delete(courseController.remove);// This route is used to delete a particular todo

export default router;