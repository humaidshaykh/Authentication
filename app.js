const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')

app.use(cookieParser());

app.get('/', (req, res) => {
    // res.cookie('name', "harsh");

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash("humaid", salt, function(err, hash) {
            console.log(hash);
        });
    });

    res.send("done");
});

// app.get('/read', (req, res) => {
//     // console.log(req.cookies);
//     res.send("read page");
// });



app.listen(3000);