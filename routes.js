var express = require("express"),
    mongodb = require("mongodb").MongoClient,
    bodyParser = require('body-parser'),
    app = express(),
    db = mongodb.connect("mongodb://localhost:27017/ecommerce", function(err, database){
        return database
    });
    console.log(db)
    //products = db.collection('products');

app.post('/api', function(req, res){
    //console.log(res)
    //res.json({products: products});
});

app.listen('3000', function(){
    console.log("App is running on port 3000");
})