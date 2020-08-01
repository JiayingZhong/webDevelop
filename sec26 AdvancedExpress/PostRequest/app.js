var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friendsList = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;
    friendsList.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friendsList});
});

app.listen(3000, function(){
    console.log("Running");
});