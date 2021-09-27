const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const user1Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "add the name "],
  },
  email: {
    type: String,
    required: [true, "add the email "],
    unique: true,
    lowercase: true, // JOAn=> joan
    validate: [validator.isEmail, "please valid email"],
  },
  photo: String,
  password: {
    type: String,
    required: [true, "provide password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "provide confirm password"],
    validate: {
      validator: function (ele) {
        // this only works in dave
        return ele === this.password;
      },
      message: "the password is different",
    },
  },
  // changepassword:Date
});
// user1Schema.pre("save", async function (next) {
//   // only run this function if passwird was actually modified
//   if (!this.isModified("password")) return next();
//   // hash the password
//   this.password = await bcrypt.hash(this.password, 12);
//   // delete passwordConfirm
//   this.passwordConfirm = undefined;
//   next();
// });

// user1Schema.methods.correctPassword = async function (
//   candidatepassword,
//   userpassword
// ) {
//   return(await bcrypt.compare(candidatepassword,userpassword));
// };
user1Schema.methods.cahngepasswordafter = function(JWTTimestamp){
  if(this.changepassword){
const changestart = parseInt(this.changepassword.getTime()/1000,10)

return JWTTimestamp < changestart

}
return false
}

const UserModels = mongoose.model("users", user1Schema);
module.exports = UserModels;
