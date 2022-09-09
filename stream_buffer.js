const fs = require("fs");

// creating the read stream from file system that will read from file and stream through it.
const readStream = fs.createReadStream("./chunk.txt");

// by truning "on" and inside of it using "data" it will start to sream the data and we will get that chunk data from cb(chunk) function

readStream.on("data", (chunk) => {
  console.log("chunk data");
  console.log(chunk);
});

// we are checking that the streaming has opended after this
readStream.on("open", () => {
  console.log("Streaming is on");
});

// creating a setTimeout to pause sending data after 10ms
setTimeout(() => {
  readStream.pause("data");
}, 10);

// resuming to stream again after 3 seconds
setTimeout(() => {
  readStream.resume("data");
}, 3000);
