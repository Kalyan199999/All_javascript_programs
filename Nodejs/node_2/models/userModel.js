const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        default:18,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

const TestingUser = mongoose.model('TestingUser', userSchema);

module.exports = TestingUser;