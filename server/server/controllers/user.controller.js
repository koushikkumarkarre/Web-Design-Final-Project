// Import todoService from Services Folder
import userService from '../services/user.service.js';

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

// This controller is used to get all the todos from the Database using todoService
const index = async(request, response)=>{
    try {
        const users = await userService.search();
        setSuccessResponse(users, response);
    } catch(e) {
        errorhandler(e.message, response);
    }
}

// This controller is used to save a todos to the Database using todoService
const save = async(request, response) => {
    try {
        const user = {...request.body};
        const newUser = await userService.save(user);
        setSuccessResponse(newUser, response);
    } catch(e) {
        errorhandler(e.message, response);
    } 
}

// This controller is used to get a particular todo from the Database using todoService
const get = async(request, response) => {
    try {
        const id = request.params.userId; // get the id of the todo from the request parameter
        const user = await userService.get(id);
        setSuccessResponse(user, response);
    } catch(e) {
        errorhandler(e.message, res);
    } 
}

// This controller is used to update a todo in the Database using todoService
const update = async(request, response)  => {
    try {
        const id = request.params.userId; // get the id of the todo from the request parameter
        let username = request.body.username; // get the username of the todo from the body of the request
        let password = request.body.password;// get the password of the todo from the body of the request
        let name = request.body.name; // get the name to complete the user
        let email =  request.body.email; // get the email to complete the user
        let course = request.body.course; //get the course of the user
        let role = request.body.role; //get the role of the user
        let image = request.body.image;
        const updatedUser = await userService.update(id, username, password, name, email, course, role, image);
        setSuccessResponse(updatedUser, response);
    } catch(e) {
        errorhandler(e.message, response);
    } 
};

// This controller is used to remove a todo from the Database using todoService
const remove = async(request, response) => {
    try {
        const id = request.params.userId; // get the id of the todo from the request parameter
        const user = await userService.get(id);

        response.set('Access-Control-Allow-Origin', '*');
        
        const removedUser = await userService.remove(id);
        setSuccessResponse({
            "message":  `Deleted the '${user.username}' User successfully`
        }, response);
    } catch(e) {
        errorhandler(e.message, res);
    } 
};
// Used to find a particular user by ID
const userById =(req, res, next, id) => {
    User.findById(id).exec((err, user)=> {
        if(err || !user){
            return res.status(400).json({
                error:"User not found"
            })
        }
        req.profile = user; 
    })
}
// To check the user authorization status
const hasAuthorization =(request, response, next) => {
    const authorized = request.profile && request.auth && request.profile._id === request.auth._id;
    if(!authorized){
        return res.status(403).json({
            error:"User is not authorized"
        });
    }
};

// Export the methods so that it can be used in todo.route.js
export default {
    index:index,
    save:save,
    get:get,
    update:update,
    remove:remove,
    test:test,
    userById:userById,
    hasAuthorization:hasAuthorization
}