const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");

  const db = client.db("TodoApp");

  //   db.collection("Todos").insertOne(
  //     {
  //       text: "Something to do",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to insert todo.");
  //       }
  //       console.log(JSON.stringify(result.ops, undefined, 2));
  //     }
  //   );

  db.collection("Users").insertOne(
    {
      name: "Lizard Warrior",
      age: 33,
      location: "Santa Cruz"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to insert user.");
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  // client.close();
});
