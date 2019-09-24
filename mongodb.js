
const { MongoClient, ObjectID } = require('mongodb');

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = 'task-manager'


MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        console.log(error);
        return console.log("Unable to connect to database!");
    }
    console.log("Database created!");
    const db = client.db(databaseName);
    db.collection('users').deleteOne({
        age: 23
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
});