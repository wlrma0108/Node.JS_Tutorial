var http=require('http');
var fs= require('fs');
var app= http.createServer(function(request,response){
    var url = request.url;
    if(request.url=='/'){
        url='/index.html';
    }
    if(http.request.url=='/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200)
    respnse.end(fs.readFileSyns(__dirname + url));
    

});
