const
    express = require("express"),
    router = express.Router(),
    userLogin = require("./../ecommerceStore").userLogin;

router.post('/api/auth', (req, res) => {
    userLogin(req.headers.username, req.headers.password)
        .then(user => {
            res.status(200).json(user)
            if(user != null)
                res.status(200).json(user)
            else {
                res.status(401).json({
                  "message" : "Error: User Not Found"
                });
            }
        })
        .catch(err => res.json({response: err}))
})

module.exports = router