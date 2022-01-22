// Import todoService from Services Folder
import authService from '../services/auth.service.js';

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
// Allows the user to create an account in portal
const signup = async (request, response) => {
    try {
        const user = await authService.signup(request.body);
        setSuccessResponse(user, response);
    } catch(e) {
        errorhandler(e.message, response);
    }
};
// Allows the user to login to the account
const signin = async (req, res) => {
    try {
        const loginUser = req.body;
        const promise = await authService.signin(loginUser);
        if(promise.error) {
            setSuccessResponse(promise, res);
            return;
        }
        // persist the token as 't' in cookie with expiry date
        res.cookie('t', promise.token, { expire: new Date() + 9999 });
        // Return response with user and token to frontend client
        const { _id, username, name, email, course, role } = promise.user;
        const data =  { token: promise.token, user: { _id, username, name, email, course, role } };
        setSuccessResponse(data, res);
    } catch(e) {
        errorhandler(e.message, res);
    }
}
// Signs out the user and removes cookies
const signout = (req, res) => {
    try {
        res.clearCookie('t');
        setSuccessResponse({ message: 'Signout successful!' }, res);
    } catch(e) {
        errorhandler(e.message, res);
    }
};

const requireSignin = authService.requireSignin;

export default {
    signup: signup,
    signin:signin,
    signout:signout,
    requireSignin:requireSignin,   
    test:test
}