const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/REFER-U');


const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
var UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

var Users = mongoose.model('Users',UserSchema);
// var testUser = new Users({
// 	username: "TD12", 
// 	password: "TD31"
// });

// testUser.save(function (err) {
//   if (!err) console.log('Success!');
// });


Users.find({username:"TD129090909"}, function (err, documents) {
  // docs.forEach
  console.log(documents);
})