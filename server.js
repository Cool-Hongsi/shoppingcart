const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// const router = require('./routers/router.js');
const bodyParser = require('body-parser');
// const mongoose = require("mongoose");
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
const db = require('./database/db');
const alert = require('alert-node');

app.use(bodyParser.urlencoded({extended: false}));
// app.use(router);

app.use(session({
    secret: 'mysupersecret',
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 5000 }
}));

session.data = {
    value : []
};

/* ---------------------------- Administrator ---------------------------- */

// get
app.get('/administrator/select', (req, res) => {
    db.selectAllProduct().then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    })
});

// post
app.post('/administrator/insert', (req, res) => {
    db.insertProduct(req.body).then(() => {
        alert("Successfully Added");
        res.redirect('/administrator');
    }).catch((err) => {
        console.log(err);
        alert("Can not add (Check ID)");
        res.redirect('/administrator');
    })
});

// put
app.post('/administrator/update', (req, res) => {
    db.updateProduct(req.body).then(() => {
        alert("Successfully Updated");
        res.redirect('/administrator');
    }).catch((err) => {
        console.log(err);
        alert("Can not update (Check ID)");
        res.redirect('/administrator');
    })
});

// delete
app.post('/administrator/delete', (req, res) => {
    db.deleteProduct(req.body).then(() => {
        alert("Successfully Deleted");
        res.redirect('/administrator');
    }).catch((err) => {
        console.log(err);
        alert("Can not delete (Check ID)");
        res.redirect('/administrator');
    })
});

/* ---------------------------- User ---------------------------- */

app.get('/frontend/data', (req, res) => {
    db.selectAllProduct().then((data) => {
        res.send(data);
    }).catch((err) => {
        console.log(err);
    })
});

app.post('/addcart', (req, res) => {
    var id = req.body.id;

    session.data.value.push(id);
    res.redirect('/product');
});

app.get('/addcart/list', (req, res) => {
    var list = [];

    db.selectAllProduct().then((data) => {

        for(var i=0; i<data.length; i++){
            for(j=0; j<session.data.value.length; j++){
                if(data[i].id == session.data.value[j]){
                    list.push(data[i]);
                }
            }
        }

        res.send(list);
    }).catch((err) => {
        console.log(err);
    });
});

app.listen(port, () => {
    console.log(`Connected ${port}`);
});