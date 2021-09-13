const http = require("http"); 

let sample = {
    status: true,
    name: "Alex",
    age: 12
}
let json = JSON.stringify(sample)

http.createServer(function(request, response) {    
    response.setHeader("Content-Type", "text/json; charset=utf-8;");
    response.write(`${json}`)
    response.end();
}).listen(3000);