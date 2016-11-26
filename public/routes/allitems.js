const express = require("express"),
    router = express.Router(),
    getAllItems = require("./../ecommerceStore").getAllItems;

router.get('/api/allitems', (req, res) => {
    getAllItems()
        .then(items => res.json({allitems: items}))
})

module.exports = router