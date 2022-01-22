import mongoose from 'mongoose';
import crypto from 'crypto';

import uuidv1 from 'uuidv1';

// Define a Sechema for the todo
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        // required: "Username is required."
    },
    hashed_password: {
        type: String,
        trim:true,
        required: "Password is required."
    },
    salt: String,
    name:{
        type: String,
        required: "Name is required."  
    },
    email: {
        type: String,
        required: "Email is required."
    },
    course: {
        type: [{}],
        default: [],
    },
    role: {
        type: String,
        required: "Role is required"
    },
    image: {
        type: String,
        default: "Profile.png"
    }
},
{
    versionKey: false
});

// Using this method an ID will be generated for the TODO automatically
userSchema.virtual('id', () => this._id.toHexString());
userSchema.set('toJSON', { virtuals: true });

userSchema
.virtual("password")
.set(function(password) {
    // create temporary variable called _password
    this._password = password;
    // generate a timestamp
    this.salt = uuidv1();
    // encryptPassword()
    this.hashed_password = this.encryptPassword(password);
})
.get(function() {
    return this._password;
});

// methods
userSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },
    
    encryptPassword: function(password) {
        if (!password) return "";
        try {
            return crypto
                .createHmac("sha1", this.salt)
                .update(password)
                .digest("hex");
        } catch (err) {
            return "";
        }
    }
};

// Define a model to the schema that was created
const User = mongoose.model('user', userSchema);

// Export the todoModel
export default User;