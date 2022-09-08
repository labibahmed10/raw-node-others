const http = require("http");

// we have to create a server here and to the function from module js, we have to create a server listen and "nodemon thisFile.js" otherwise it won't work.

let any = require("./module");
console.log(any);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<p>anyhing</p>");
  res.end();
});

server.listen(5000);
