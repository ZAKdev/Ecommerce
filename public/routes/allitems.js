module.exports = (db, req, res) => {
    db.collection("products").find().toArray((err, product) => {
        res.json({product: product});
    })
}