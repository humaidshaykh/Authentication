const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

app.use(cookieParser());

app.get('/', (req, res) => {
    // res.cookie('name', "harsh");

    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("humaids", salt, function(err, hash) {
    //         console.log(hash);
    //     });
    // });

    // bcrypt.compare("humaids", "$2b$10$qpUOX/nROf9o88kfIHdGw.gMgAFlvCSqEb.J7CXoDOFrF5lnebh4C", function(err, result) {
    //     console.log(result);
    // });

    let = token = jwt.sign({email: "hs@gmail.com"}, "secret");
    res.cookie("token", token);
    res.send("done")
    
});

app.get('/read', (req, res) => {
    console.log(req.cookies.token);
    res.send("read page");

    const data = jwt.verify(req.cookies.token ,  "secret");
    console.log(data);
    
});

// app.get('/read', (req, res) => {
//     // console.log(req.cookies);
//     res.send("read page");
// });



app.listen(3000);