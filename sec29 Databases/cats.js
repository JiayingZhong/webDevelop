const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/cat_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to db"))
.catch(error => console.log(error.message));

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// Method 1: new and the .save
// var george = new Cat({
//     name: "Mrs.Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMGTHING WENT WRONG!");
//     }
//     else{
//         console.log("We just saved a new cat to the DB");
//         console.log(cat);
//     }
// });

// Method 2: .create
Cat.create({
    name: "Snow Black",
    age: 5,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else{
        console.log("Added Snow Black");
        console.log(cat);
        catList();
    }
});


// retrieve all cats from the DB and console.log each time
function catList(){
    Cat.find({}, function(err, cats){
        if(err){
            console.log("Oh no, ERROR!");
            console.log(err);
        }
        else{
            console.log("All the cats...");
            console.log(cats);
        }
    });
}
