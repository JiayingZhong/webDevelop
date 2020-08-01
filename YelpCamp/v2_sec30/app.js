var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// connect to the mongodb
mongoose.connect("mongodb://localhost:27017/yelp_camp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to db"))
.catch(error => console.log(error.message));

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// schema setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Salmon Creek", 
//         image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     }, 
//     // {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//     // {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
//     // {name: "Joshua Tree", image: "https://www.nps.gov/jotr/planyourvisit/images/Ryan-web-Schwalbe.jpg"},
//     function(err, campground){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Newly created Campground: ");
//             console.log(campground);
//         }
//     }
// );


app.get("/", function(req, res){
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    // Get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE - add new campground in DB
app.post("/campgrounds", function(req, res){
    // get data from and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    // Create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else{
            // redirect back to campground page
            res.redirect("/campgrounds");
        }
    });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    // find the campground with the provided id
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }
        else{
            // render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(3000, function(){
    console.log("Yelp Camp started");
});