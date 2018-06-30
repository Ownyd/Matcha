import mongoose from 'mongoose';
import { User } from './databaseSchema'
mongoose.connect('mongodb://localhost:27017');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const test = new User({
    mail: "String",
    username: "String",
    firstname: "String",
    lastname: "String",
    password: "0"});

    test.save(function (err, test) {
        if (err) return console.error(err);
        console.log("ok");
      });

const Users = {
    getAll() {
        return ({
            _id: "toto",
            mail: "String",
            username: "String",
            firstname: "String",
            lastname: "String",
            password: "0"});
    },
    addOne(mail, username, firstname, lastname, password) {
        return (test);
    }
}

export default Users