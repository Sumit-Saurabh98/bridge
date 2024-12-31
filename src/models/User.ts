import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    },
    password: {
        type: String,
        minLength: 8
    },
    googleId: {
        type: String
    },
    githubId: {
        type: String
    },
    profileImage: {
        type: String
    },
    bio: {
        type: String
    }
}, {timestamps: true});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;