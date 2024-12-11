const readline = require('readline');

// Create an interface to read input from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Enter input (type 'exit' to terminate):");

rl.on('line', (input) => {
  // Check for the termination condition
  if (input.trim().toLowerCase() === 'exit') {
    console.log("Terminating...");
    rl.close();  // Close the input stream
    return;
  }

  // Otherwise, process the input
  console.log(`You entered: ${input}`);
});

// Handle when the input stream is closed
rl.on('close', () => {
  console.log('Input stream closed.');
  process.exit(0);  // Optional: Exit the Node.js process
});
