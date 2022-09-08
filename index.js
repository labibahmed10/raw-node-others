const http = require("http");
const url = require("url");

// basic node server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<p>anyhing</p>");
  res.end();
});



server.listen(5000);
