// Import courseService from Services Folder
import courseService from '../services/course.service.js';

//TEST
const test = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send('API Test: API Functioning');
}

// This is used to handle the error
const errorhandler = (message, response) => {
    response.status(500);
    response.json({ error: message });
}

// This is handle the success of the process
const setSuccessResponse = (data, response) => {
    response.status(200);
    response.json(data);
}

// This controller is used to get all the courses from the Database using courseService
const index = async(request, response)=>{
    try {
        const courses = await courseService.search();
        setSuccessResponse(courses, response);
    } catch(e) {
        errorhandler(e.message, response);
    }
}

// This controller is used to save a courses to the Database using courseService
const save = async(request, response) => {
    try {
        const course = {...request.body};
        const newCourse = await courseService.save(course);
        setSuccessResponse(newCourse, response);
    } catch(e) {
        errorhandler(e.message, response);
    } 
}

// This controller is used to get a particular course from the Database using courseService
const get = async(request, response) => {
    try {
        const id = request.params.courseId; // get the id of the course from the request parameter
        const course = await courseService.get(id);
        setSuccessResponse(course, response);
    } catch(e) {
        errorhandler(e.message, response);
    } 
}

// This controller is used to update a course in the Database using courseService
const update = async(request, response)  => {
    try {
        const id = request.params.courseId; // get the id of the course from the request parameter
        let title = request.body.title; // get the title of the course from the body of the request
        let headline = request.body.headline; // get the headline(s) of the course from the body of the request
        let description = request.body.description;// get the description of the course from the body of the request
        let keyPoint = request.body.keyPoint; // get the keyPoint(s) to complete the coursetask
        let skill =  request.body.skill; // get the skill(s) to complete the coursetask
        let rating = request.body.rating; //get the rating(s) of the coursetask
        let instructor = request.body.instructor; // get the instructor(s) of the course from the body of the request
        let medium = request.body.medium; // get the medium of the course from the body of the request
        let source = request.body.source; // get the path of the course from the body of the request
        let image = request.body.image;
        const updatedCourse = await courseService.update(id, title, headline, description, keyPoint, skill, rating, instructor, medium, source, image);
        setSuccessResponse(updatedCourse, response);
    } catch(e) {
        errorhandler(e.message, response);
    } 
};

// This controller is used to remove a course from the Database using courseService
const remove = async(request, response) => {
    try {
        const id = request.params.courseId; // get the id of the course from the request parameter
        const course = await courseService.get(id);

        response.set('Access-Control-Allow-Origin', '*');
        
        const removedCourse = await courseService.remove(id);
        setSuccessResponse({
            "message":  `Deleted the '${course.title}' Course successfully`
        }, response);
    } catch(e) {
        errorhandler(e.message, response);
    } 
};

// Export the methods so that it can be used in course.route.js
export default {
    index:index,
    save:save,
    get:get,
    update:update,
    remove:remove,
    test:test
}