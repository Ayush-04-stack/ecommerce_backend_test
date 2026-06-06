const mongoose = require('mongoose');
require('dotenv').config();


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB');
        
    } catch (error) {
        if (error) throw error;
    }
}

module.exports = connectDB;