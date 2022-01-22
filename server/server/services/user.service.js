import User from '../models/user.js';

// This Service is used to get all the Users
const search = (params)=>{
    const promise = User.find(params).exec();
    return promise;
}

// This Service is used to save the Users
const save = (newUser) => {
    const user = new User(newUser);
    const promise = user.save();
    return promise;
}

// This Service is used to get a particular Users
const get = (id)=>{
    const promise = User.findById(id).exec();
    return promise;
}

// This Service is used to update a particular Users
const update = (id, userUsername, userPassword, userName, userEmail, userCourse, userRole, userImage) =>{
    const promise = User.findOneAndUpdate(
        {_id: id},
        {
            username: userUsername, 
            password: userPassword, 
            name: userName, 
            email: userEmail, 
            course: userCourse,
            role: userRole,
            image: userImage 
        },
        {new: true}
    ).exec();

    return promise;
}

// This Service is used to remove a particular Users
const remove = (id) => {
    const promise= User.findByIdAndRemove(id).exec();
    return promise;
}

export default {
    search:search,
    save:save,
    get:get,
    update:update,
    remove:remove
}