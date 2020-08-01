var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var methodOverride = require("method-override");
var expressSanitizer = require("express-sanitizer");
var app = express();

// APP config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to db"))
.catch(error => console.log(error.message));

// Mongoose/Model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1595423488649-7083891000fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
//     body: "This is an adorable doggy!!!!"
// });

// RESTful Routes
app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {blogs: blogs});
        }
    });
});

// New route
app.get("/blogs/new", function(req, res){
    res.render("new");
});

// Create route
app.post("/blogs", function(req, res){
    // create blog
    // use Sanitize to filter bad info in input (eg: js alert())
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            console.log(err);
        }
        else{
            // then, redirect to the index
            res.redirect("/blogs");
        }
    });
});

// Show route
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("show", {blog: foundBlog});
        }
    })
});

// Edit route
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.render("edit", {blog: foundBlog});
        }
    });
});

// Update route
app.put("/blogs/:id", function(req, res){
    // use Sanitize to filter bad info in input (eg: js alert())
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlog){
        if(err){
            res.redirect("/blogs");
        }
        else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// Delete route
app.delete("/blogs/:id", function(req, res){
    // destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        }
        else{
            // redirect 
            res.redirect("/blogs");
        }
    });
});

app.listen(3000, function(){
    console.log("running");
});