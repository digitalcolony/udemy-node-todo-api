const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

Todo.findByIdAndRemove("5a766b07a2c12300cc5d07e2").then(todo => {
  console.log(todo);
});
