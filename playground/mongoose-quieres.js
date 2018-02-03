const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var id = "5a74c8e03e2b610868123ee5";

User.findById(id)
  .then(user => {
    if (!user) {
      return console.log("User Not Found");
    }
    console.log("User By ID: ", JSON.stringify(user, undefined, 2));
  })
  .catch(e => console.log(e));

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Nope!");
//     }
//     console.log("Todo by ID ", todo);
//   })
//   .catch(e => console.log(e));
