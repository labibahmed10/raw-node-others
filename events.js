const EventEmitter = require("events");

// we have create an object instance from EventEmitter() class
const event = new EventEmitter();

// purpose of event is amazing -

// To create any event we can either use event.on() | event.addListener() and inside of it we have to give a name of the event and a cb() function.

// this callback function can have various name but event name be same for all

// addListener()
event.addListener(
  "Screaming",
  (emitFunc = () => {
    console.log("I'm the first event");
  })
);

// on()
event.on(
  "Screaming",
  (emitFuncs = () => {
    console.log("I'm the second event");
  })
);

event.on(
  "Screaming",
  (emitFunca = () => {
    console.log("I'm the third event");
  })
);

// To call the events we have to use emit() and inside have to give the event name and the function name
// it doesn't matter to name of func cause by event name it will call
event.emit("Screaming", emitFunc);

// To see all the events in an array | doesn't matter if we don't put the name of all func
const allEvents = event.listeners("Screaming");
console.log(allEvents);
