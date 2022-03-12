//helloword.js
/***
 * @author ashok
 * @since 2022-03-12
 */
console.log("Starting HTTP WEB server for Hello World");

const http=require("http");
//create and start an HPServer
http.createServer(function(req, res){
    res.writeHead(200,{
        "Content-Type":"text/html"
    });
    const pageContent=` Remove all the contents
                        Try refreshing man
                        hahah<br>
                        Use following command to start nodemon<br>
                        nodemon helloword.js<br>
                         `
    res.end(pageContent);
}).listen(8080)