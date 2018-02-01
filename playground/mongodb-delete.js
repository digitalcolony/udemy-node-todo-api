const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");

  const db = client.db("TodoApp");

  // DeleteMany

  db
    .collection("Users")
    .deleteMany({
      name: "Lizard Warrior"
    })
    .then(result => {
      console.log(result);
    });

  // DeleteOne
  //   db
  //     .collection("Todos")
  //     .deleteOne({
  //       text: "Eat lunch"
  //     })
  //     .then(result => {
  //       console.log(result);
  //     });
  //   // client.close();

  // FindOneAndDelete
  //   db
  //     .collection("Users")
  //     .findOneAndDelete({
  //       _id: new ObjectID("5a735be6de5a2f3ad4256743")
  //     })
  //     .then(result => {
  //       console.log(result);
  //     });
});
