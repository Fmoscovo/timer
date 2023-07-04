const args = process.argv.slice(2);
// const beep = () => process.stdout.write("\x07"); // beep sound
const beep = () => process.stdout.write("⏰"); // when no sound, use this

for (const arg of args) {
  // Schedule beeps based on command-line arguments
  setTimeout(() => {
    beep();
  }, arg * 1000);
}

function beepAt(seconds) {
  // beep at a specific time in seconds
  setTimeout(() => {
    beep();
  }, seconds * 1000);
}

// Edge Cases
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
if (args.length === 0) {
  process.exit();
}
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
if (args.some((arg) => arg < 0)) {
  console.log("Negative numbers are not allowed.");
  process.exit();
}
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
if (args.some((arg) => isNaN(arg))) {
  console.log("Please enter only numbers.");
  process.exit();
}

// node timer1.js 10 3 5 15 9
