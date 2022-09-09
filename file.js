const http = require("http");
const fs = require("fs");
// const e = require("cors");



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
    //

    // writing in a file asynchronous way || there will be no "data" in callback
    fs.writeFile("data.txt", "<p>Writing in a file Asynchronously with a callback</p>", (err) => {
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

    // writing in a file Synchronous way || there is no callback in synchronous
    fs.writeFileSync("data-2.txt", "<p>Writing in a file synchronously without any callback</p>");

    // reading in file Synchronous way || there is no callback in synchronous
    const synchr_file = fs.readFileSync("data-2.txt");
    res.write(synchr_file);

    // here if I use res.end() so the asynchronous file will not execute
    // res.end();
  }
});

server.listen(5000);
