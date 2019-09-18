
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = 'task-manager'


mongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log(error);
        return console.log("Unable to connect to database!");
    }
    console.log("Database created!");
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name: "Neha",
        age: 23
    })
});