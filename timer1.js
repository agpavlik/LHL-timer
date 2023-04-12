const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  setTimeout(() => {
    console.log("\x07");
  }, 1000 * args[i]);
}



