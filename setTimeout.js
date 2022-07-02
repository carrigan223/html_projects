const consoleLogging = (msg) => {
  return console.log(msg);
};

setTimeout(() => consoleLogging("in set timout"), 10000);

consoleLogging("not in set timeout");
