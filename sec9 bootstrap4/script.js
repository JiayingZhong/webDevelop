// var userFirstName = prompt("What is your first name?");
// var userLastName = prompt("What is your last name?");
// alert("Nice to meet you, " + userFirstName + " " + userLastName);
// var userAge = prompt("How old are you?");
// console.log("Your full name is " + userFirstName + " " + userLastName);
// console.log("You are " + userAge + " years old");

// // 年龄分类
// var userAge = prompt("How old are you?");
// if(userAge < 0){
//     console.log("Error Age");
// }
// if(userAge == 21){
//     console.log("Happy 21th birthday!");
// }
// if(userAge % 2 === 1){
//     console.log("Your age is odd!");
// }
// if(userAge % Math.sqrt(userAge) === 0){
//     console.log("Your age is a perfect square!");
// }

// // 猜年龄
// var target = 12;
// do {
//     var guessAge = prompt("Guess age?");
//     if(guessAge < target){
//         alert("You guess low");
//     }else if(guessAge > target){
//         alert("You guess high");
//     }
// }
// while(guessAge != target);
// alert("You win!");


function greet(person){
    console.log("hi " + person);
    // console.log("hi " + person[1]);
}
var set = ["aaa","bccc"];
var person = 123;
greet(person);