import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    mail: String,
    username: String,
    firstname: String,
    lastname: String,
    password: String,
});

const User = mongoose.model('User', userSchema);

export default User;