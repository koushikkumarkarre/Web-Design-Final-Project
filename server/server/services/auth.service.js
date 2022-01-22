import jwt from 'jsonwebtoken'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('dotenv').config();
const expressJwt = require('express-jwt');
import User from '../models/user.js';

// This method is used to create a new user
const signup = async (newUser) => {
    const userExists = await User.findOne({ email: newUser.email }).exec();
    if (userExists) {
        return ({ error: 'Email is already registered!' });
    }
    const user = new User(newUser);
    const promise = user.save();
    return promise;
};

// Used to login and generate a token
const signin = async (loginUser) => {
    const user = await User.findOne({ email: loginUser.email }).exec();
    // If error is encountered or no user exists
    if (!user) {
        return ({ error: 'User does not exist. Please signup.' });
    }
    // If user is found make sure the email and password match
    // Create authenticate method in model and use here
    if (!user.authenticate(loginUser.password)) {
        return ({ error: 'Please check the entered credentials.' });
    }
    // generate a token with user id and secret
    const token = jwt.sign({ _id: user._id}, 'secret');
    
    // var decoded = jwt.verify(token, 'secret');
    // delete decoded['iat'];
    
    const promise = { user, token };
    return promise;
}

const requireSignin = expressJwt({
    secret: 'secret',
    algorithms: ['HS256'],
    userProperty: 'auth'
});

export default {
    signup: signup,
    signin:signin,
    requireSignin:requireSignin,
}