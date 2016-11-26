const mongodb = require("mongodb").MongoClient,
    config = require("./../config/config"),
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/allitems'))

app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`);
});