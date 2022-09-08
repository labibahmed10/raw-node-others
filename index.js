const http = require("http");
const url = require("url");

// basic node server
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<p>anyhing</p>");
  res.end();
});

// basic node server with json response
const server1 = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  res.write(JSON.stringify({ code: "my first raw node Alhamdulillah" }));
  res.end();
});

const server3 = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<p>anyhing</p>"));
  const hel = req.url;
  const urla = "http://localhost:5000/comment?what=you&so=nothing";
  console.log(url.parse(urla, true));
  res.end();
});

server.listen(5000);
