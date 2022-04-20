function timer(delay) {
  for (let i = 0; i < delay.length; i++) {
    if (isNaN(delay[i]) || delay[i] < 0) {
      break;
    } else {
      (function () {
        var j = i;
        setTimeout(function () {
          process.stdout.write("\x07");
        }, delay[i] * 1000);
      })();
    }
  }
};

let terminalInput = process.argv.slice(2);
timer(terminalInput);
