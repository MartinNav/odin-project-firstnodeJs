
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    if (translate(req.url) === "404.html"){

    res.writeHead(404,{'Content-Type': 'text/html'});
    }else{
        res.writeHead(200,{'Content-Type': 'text/html'});

    }


    try
    {
        fs.readFile(translate(req.url), 'utf-8',(err,data)=>{
            if (err) throw err;
            res.end(data); // send data to response
        })
    }
    catch (err){
        console.log('error: ' + err);
    } 

}).listen(8080);

function translate(url){
    switch (url){
        case "/about.html":
            return "about.html";
        case "/contact-me.html":
            return "contact-me.html";
        case "/":
            return "index.html";
        case"/index.html":
            return "index.html";
        default:
            return "404.html"
    }


}