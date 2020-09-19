
const fs = require('fs');
const http = require('http');
let writeDate = function(){
    return new Date().getUTCDate();
}

fs.writeFile(''+writeDate()+'.txt', ''+writeDate()+'',(err)=>{
    if(err) throw err;
    console.log("file created successfully!!!");

});
http.createServer((req,res)=>{
    fs.readFile(''+writeDate()+'.txt',(err,data)=>{
             res.writeHead(200,{"Content-Type":"text/html"});
             res.write(data);
             res.end();
    });
}).listen(5050);