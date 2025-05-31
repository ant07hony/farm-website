import mongoose from 'mongoose'

// Mongoose schema that defines a user
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

module.exports = User;