var request = require("request");

request("http://jsonplaceholder.typicode.com/users/1", function(error, response, body){
    eval(require("locus"));
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    }
});