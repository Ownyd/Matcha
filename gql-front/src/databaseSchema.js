import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    _id: String,
    mail: String,
    username: String,
    firstname: String,
    lastname: String,
    password: String,
});

const User = mongoose.model('User', userSchema);
