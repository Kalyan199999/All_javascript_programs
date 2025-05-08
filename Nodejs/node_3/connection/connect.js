const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.connection_string);

        console.log('Connected to MongoDB');
    } 
    catch (error) {
        console.log('Error connecting to MongoDB', error);
    }
}

module.exports = connect;