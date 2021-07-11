const express = require('express');

const server =express();

server.get('/',function(request,response){
    console.log(request.method);
    console.log(request.query.query1);
    console.log(request.headers);
    response.send('Hello World');
})

server.listen(3000,function(){
    console.log('server started.....');
})