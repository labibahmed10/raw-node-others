const http = require("http");
const fs = require("fs");

// we have to create a server here and to the function from module js, we have to create a server listen and "nodemon thisFile.js" otherwise it won't work.

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    //

    // writing in a file asynchronous way || there will be no "data" in callback
    fs.writeFile("data.txt", "<p></p>Writing in a file Asynchronously with a callback</p>", (err) => {
      if (err) {
        console.log(err);
      }
    });

    // appending a new line to the same file asynchronously
    fs.appendFile("data.txt", "<p>Appending into data file aynchronously</p>", (err) => {
      console.log(err);
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

    // appending a new line to the same file Synchronously
    fs.appendFileSync("data-2.txt", "<p>Appending into data - 2 file Snchronously</p>");

    // reading in file Synchronous way || there is no callback in synchronous
    const synchr_file = fs.readFileSync("data-2.txt");
    res.write(synchr_file);

    // here if I use res.end() so the asynchronous file will not execute
    // res.end();
  }
});

server.listen(5000);
