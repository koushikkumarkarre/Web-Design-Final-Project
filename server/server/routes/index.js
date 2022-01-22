import CourseRouter from './course.route.js';
import UserRouter from './user.route.js';
import AuthRouter from './auth.route.js';

/* GET home page. */
export default (app)=>{
  app.use('/', CourseRouter);
  app.use('/', UserRouter);
  app.use('/', AuthRouter);
}
