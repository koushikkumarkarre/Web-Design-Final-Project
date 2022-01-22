import Course from '../models/course.js';

// This Service is used to get all the Courses
const search = (params)=>{
    const promise = Course.find(params).exec();
    return promise;
}

// This Service is used to save the Courses
const save = (newCourse) => {
    const course = new Course(newCourse);
    const promise = course.save();
    return promise;
}

// This Service is used to get a particular Courses
const get = (id)=>{
    const promise = Course.findById(id).exec();
    return promise;
}

// This Service is used to update a particular Courses
const update = (id, courseTitle, courseHeadline, courseDescription, courseKeyPoints, courseSkills, courseRatings, courseInstructors, courseMedium, courseSource, courseImage) =>{
    const promise = Course.findOneAndUpdate(
        {_id: id},
        {
            title: courseTitle,
            headline: courseHeadline, 
            description: courseDescription, 
            keyPoint: courseKeyPoints, 
            skill: courseSkills, 
            rating: courseRatings,
            instructor: courseInstructors,
            medium: courseMedium,
            source: courseSource,
            image: courseImage
        },
        {new: true}
    ).exec();

    return promise;
}

// This Service is used to remove a particular Courses
const remove = (id) => {
    const promise= Course.findByIdAndRemove(id).exec();
    return promise;
}

export default {
    search:search,
    save:save,
    get:get,
    update:update,
    remove:remove
}