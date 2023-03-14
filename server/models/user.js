const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: 'Username  is required',
        maxLength: 10,
        minLength: 6,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address',
        ],
    },
    password: {
        type: String,
        required: 'Password is required',
        // maxLength: 10,
        minLength: 6,
    },
    birthdate: { type: Date },
    first_name: { type: String, required: 'First name is required' },
    last_name: { type: String, required: 'Last name is required' },
    token: { type: String },
})

const UserModel = mongoose.model('User', User)

module.exports = UserModel
