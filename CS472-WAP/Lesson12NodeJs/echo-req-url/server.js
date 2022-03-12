/***
 * server.js
 */
console.log("server starting .............");
const http = require("http");
const url =  require("url"); 
http.createServer(function(request,response){
    response.writeHead(200,{
        "Content-Type": "text/html"
    });
    console.log(request.url);

    const queryString = url.parse(request.url,true,false).query;
    // console.log(`QueryString : ${queryString}`);
    const content = `Year was ${queryString.year}. Month was ${queryString.month}`;
    console.log(content);
    response.write(content);
    response.end();
}).listen(8080);