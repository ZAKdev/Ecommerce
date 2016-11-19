const mongodb = require("mongodb").MongoClient,
    config = require("./../config/config");

module.exports = mongodb.connect(config.mongoConnection, config.mongoOptions);