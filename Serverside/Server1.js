const db = require('./database');
const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { register } = require('module');
const { name } = require('ejs');

// Replace the body-parser middleware with Express's built-in middlewares
app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Views'));
app.set("view engine","ejs");


app.get("/", (req,res)=>{
    res.render("Home");
})


app.get("/MainClass",(req,res)=>{
    res.render("MainClass");
})
app.get("/TodoList",(req,res)=>{
    res.render("TodoList");
})
app.get("/login",(req,res)=>{
    res.render("login");
})
app.get("/Courses",(req,res)=>{
    res.render("Courses");
})
app.post('/login',bodyParser, (req, res) => {
  var namee = req.body.name;
  var idd = req.body.id;
  var passwordd = req.body.password;
    var sql = "INSERT INTO student(moodle_id,name,password) VALUES('" + idd + "','" + namee + "','" + passwordd + "')";
    var name = namee;
  db.query(sql,function (err, result) {
      res.render('register');
  });
});

app.get('/login', bodyParser, (req, res) => {
    var moodle_id = req.body.id;
    var password = req.body.password;
    if (moodle_id && password) {
        query = `Select * From Student(moodle_id,password) Where moodle-id = "${moodle_id}"`;
        db.query(query, (error, data) => {
            if (data.length > 0) {
                for (var count = 0; count < data.length; count++){
                    if (data[count].password = password) {
                        req.session.moodle_id = data[count].moodle_id;
                        res.redirect("/");
        }
                    else {
                        res.send('Incorrect password')
                    }
                }
            }
            else {
                res.send('Incorrect MoodelId')
            }
        });
    }
    else {
        res.send("Please enter Moodleid and password");
        res.end();
    }
    
})
app.get("/home/:username", (req, res) => {
    var username = name;
    res.render("home", { username });

});
app.get("/Home", (req,res)=>{
    var username = name;
    res.render("home", { username });
})
app.listen(port,()=>{
  console.log(`listening on port ${port}`)
});
