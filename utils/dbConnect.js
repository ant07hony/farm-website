import mongoose from 'mongoose';

// using mongoose to connect to the database and export
const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = dbConnect