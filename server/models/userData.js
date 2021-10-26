import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
});

var UserData = mongoose.model('UserData', userSchema);

export default UserData;
