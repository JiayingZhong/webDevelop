var express = require("express");
const e = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

// app.listen(3000, function(){
//     console.log("running");
// });

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("running");
});