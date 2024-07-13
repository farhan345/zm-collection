const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log(`Connected to DB Successfully at host: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in mongoDB: ${error}`);
    }
}

module.exports = connectDb;