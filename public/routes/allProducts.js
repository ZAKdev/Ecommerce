const express = require('express'),
    getDbCollection = require("./../DbConnection"),
    app = express();

const getAllProducts = app.get('/', (req, res) => {
    getDbCollection
        .then(db => {
            db.collection("products").find().toArray((err, product) => {
                res.json({product: product});
            })
        })
})

module.exports = getAllProducts;