const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')

app.use(cookieParser());

app.get('/', (req, res) => {
    // res.cookie('name', "harsh");

    bcrypt.compare("humaids", "$2b$10$qpUOX/nROf9o88kfIHdGw.gMgAFlvCSqEb.J7CXoDOFrF5lnebh4C", function(err, result) {
        console.log(result);
    });

    res.send("done");
});

// app.get('/read', (req, res) => {
//     // console.log(req.cookies);
//     res.send("read page");
// });



app.listen(3000);