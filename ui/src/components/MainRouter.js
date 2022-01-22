import react from 'react';
import {Route, Switch} from 'react-router-dom'
import MyProfile from './MyProfile/MyProfile'
import Courses from './Courses/courses'
import CourseDetails from './CourseDetails/CourseDetails'
import Home from './Home/Home'
import Menu from './Navbar/menu'
import Signin from './LandingLoginComponent/LoginComponent';
import Signup from './Signup/Signup';
import AdminSignup from './Signup/AdminSignup';
import PrivateRoute from './Auth/PrivateRoute.js'
import addNewItem from './AddNewCourse/AddCourseItem'
import AdminPage from './Admin/AdminPage';
import DeleteCourse from './Admin/deleteCourse';
import UpdateCourse from './Admin/UpdateCourse';
import UpdateSingleCourse from './Admin/UpdateSingleCourse';
import Coursevideo from './Courses/Coursevideo';
import Contactus from './Contactus/Contactus';
import Map from './Courses/Map';
import FileHandler from './Courses/FileHandler';

class Mainrouter extends react.Component{

    render(){
        return(
            <div>
                <Menu />
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/courses" exact component={Courses}></Route>
                    <Route exact path="/signup" component={Signup}></Route>
                    <Route exact path="/adminSignup" component={AdminSignup}></Route>
                    <Route exact path="/contactus" component={Contactus}></Route>
                    <Route exact path="/coursevideo" component={Coursevideo}></Route>
                    <PrivateRoute exact path="/admin" component={AdminPage}></PrivateRoute>
                    <PrivateRoute exact path="/admin/add" component={addNewItem}></PrivateRoute>
                    <PrivateRoute exact path="/admin/delete" component={DeleteCourse}></PrivateRoute>
                    <PrivateRoute exact path="/admin/update" component={UpdateCourse}></PrivateRoute>
                    <PrivateRoute exact path="/user/:userId" component={MyProfile}></PrivateRoute>
                    <PrivateRoute exact path="/file/:courseId" component={FileHandler}></PrivateRoute>
                    <PrivateRoute exact path="/update/:courseId" component={UpdateSingleCourse}></PrivateRoute>
                </Switch>
            </div>
        )
    }
}

export default Mainrouter;