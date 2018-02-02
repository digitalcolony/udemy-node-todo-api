const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");

  const db = client.db("TodoApp");

  //FindOneAndUpdate

  db
    .collection("Users")
    .findOneAndUpdate(
      {
        name: "Taco Warrior"
      },
      {
        $inc: {
          age: 1
        },
        $set: {
          name: "Taco Ninja"
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(result => {
      console.log(result);
    });
});
