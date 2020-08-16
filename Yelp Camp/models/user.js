var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

// UserSchema.methods.authenticate = function(password) {      
//     return this.password === password;
//   }

UserSchema.plugin(passportLocalMongoose)

module.export = mongoose.model("User", UserSchema);