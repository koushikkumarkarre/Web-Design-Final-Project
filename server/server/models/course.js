import mongoose from 'mongoose';

// Define a Schema for the course
const courseSchema = new mongoose.Schema({
    title:{
        type: String,
        required: "Title is required."
    },
    headline: {
        type: String,
        required: "Brief Headline of Course required."
    },
    description:{
        type: String,
        required: "Description is required."  
    },
    keyPoint: {
        type:[String],
    },
    skill: {
        type: [String],
        required: "Skills gained is required."
    },
    rating: {
        type: Number,
        default: Date.now
    },
    instructor: {
        type: [String],
    },
    medium: {
        type: String,
        required: "Type of Course is required",
        default: "path"
    },
    source: {
        type: String,
        required: "Path for Course Material required",
        default: "medium"
    },
    image: {
        type: String,
        default: "Course.png"
    }
},
{
    versionKey: false
});

// Using this method an ID will be generated for the TODO automatically
courseSchema.virtual('id', () => this._id.toHexString());
courseSchema.set('toJSON', { virtuals: true });

// Define a model to the schema that was created
const Course = mongoose.model('course', courseSchema);

// Export the todoModel
export default Course;