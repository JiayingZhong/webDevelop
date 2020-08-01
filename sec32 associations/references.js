var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to db"))
.catch(error => console.log(error.message));

var Post = require("./models/post");
var User = require("./models/user");



// User.create({
//     email: "bob@usc.edu",
//     name: "Bob"
// });


// Post.create({
//     title: "blah blah blah pt. 4",
//     content: "lijfkgdfskgjf;lasfhkla"
// }, function(err, post){
//     User.findOne({email: "bob@usc.edu"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         }
//         else{
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });


// // Find user
// // find all posts for the data
// User.findOne({email: "bob@usc.edu"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });
