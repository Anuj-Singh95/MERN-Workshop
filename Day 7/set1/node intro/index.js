// var http = require('http');

// http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('<h1>Hello World!</h1>');
// }).listen(8080);





const fs= require('fs');

// const data = fs.readFileSync('./myReadMe.txt');
// console.log(data.toString());

const data = fs.readFileSync('./myReadMe.txt',{encoding:'utf-8'});
console.log(data);