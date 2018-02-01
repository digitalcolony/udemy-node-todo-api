const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB Server");
  const db = client.db("TodoApp");
  //   db
  //     .collection("Todos")
  //     .find()
  //     .count()
  //     .then(
  //       count => {
  //         console.log(`Todos Count:${count}`);
  //       },
  //       err => {
  //         console.log("Unable to get count. ", err);
  //       }
  //     );
  db
    .collection("Users")
    .find({
      name: "Taco"
    })
    .toArray()
    .then(
      docs => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log("Unable to fetch users: ", err);
      }
    );

  // client.close();
});
