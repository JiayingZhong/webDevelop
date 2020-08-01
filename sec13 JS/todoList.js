var todos = ["i like turtle"];
input = prompt("What do you want?");

while(input != "quit") {
    if(input === "list"){
        console.log("*************");
        todos.forEach(function(todo, i){
            console.log(i + " : " + todo);
        });
        console.log("*************");
    }
    else if(input === "new"){
        var newTodo = prompt("enter new todo?");
        todos.push(newTodo);
        console.log("succuessfully add");
    }
    else if(input === "delete"){
        var deleteId = prompt("Which id do you wanna delete");
        todos.splice(deleteId, 1);
        console.log("succuessfully delete");
    }
    input = prompt("What do you want?");
}
console.log("OK, finish!");

