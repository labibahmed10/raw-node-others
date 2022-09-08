const http = require("http");
const fs = require("fs");
const e = require("cors");

// we have to create a server here and to the function from module js, we have to create a server listen and "nodemon thisFile.js" otherwise it won't work.

// let any = require("./module");
// console.log(any);

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write("<p>anyhing</p>");
//   res.end();
// });

// server.listen(5000);

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    
    // writing in a file asynchronous way
    fs.writeFile("data.txt", "Hijibijihijibiji", (err) => {
      if (err) {
        console.log(err);
      }
    });

    // reading in file asynchronous way
    fs.readFile("data.txt", (err, data) => {
      if (err) {
        res.write("There is a error");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(5000);
