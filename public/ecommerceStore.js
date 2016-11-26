const mongodb = require("mongodb").MongoClient,
    config = require("./../config/config");

const database = mongodb.connect(config.mongoConnection, config.mongoOptions)

const getAllItems = () => database
    .then(db => db.collection("products").find().toArray());

module.exports = {
    getAllItems
}