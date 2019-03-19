var http = require('http');
var fs = require('fs');

//404 response
function fff(response){
    response.writeHead(404,{"Content-Type": "text/plain"});
    response.write("404 PAGE NOT FOUND");
    response.end();
}
function firstServer(request, response){
if(request.method == "GET" && request.url == '/'){
    response.writeHead(200, {"Content-Type": ' text/html' });
    fs.createReadStream("./Server.html").pipe(response);

    
}else{
    fff(response);
}
}
http.createServer(firstServer).listen(3000);
console.log("Server is running");