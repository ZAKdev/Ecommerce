var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use('/', require("./routes/allProducts"));

app.listen('3000', () => {
    console.log("App is running on port 3000");
});