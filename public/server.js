const mongodb = require("mongodb").MongoClient,
    config = require("./../config/config"),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

const AllItems = require('./routes/allitems');

app.use(bodyParser.urlencoded({ extended: true }));

mongodb.connect(config.mongoConnection, config.mongoOptions, (err, database) => {
    if (err)
        throw err;

    app.post('/api/allitems', (req, res) => {
        AllItems(database, req, res)
    });
})

app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`);
});