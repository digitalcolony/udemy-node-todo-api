var mongoose = require("mongoose");

var User = mongoose.model("User", {
  email: {
    type: String,
    require: true,
    minLength: 5,
    trim: true
  }
});

module.exports = { User };

//   var newUser = new User({
//     email: "taco@gmail.com"
//   });

//   newUser.save().then(
//     doc => {
//       console.log("Saved User ", JSON.stringify(doc, undefined, 2));
//     },
//     e => {
//       console.log("Save failed ", e);
//     }
//   );
