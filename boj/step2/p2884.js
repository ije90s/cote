const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  const input = line.split(' ');
  let hour = Number(input[0]);
  let min = Number(input[1]);

  if(min < 45){
    hour-=1;
    min+=60;
    if(hour < 0) hour = 23;
  }
  min-=45;
  console.log(`${hour} ${min}`);

  rl.close();
}).on("close", function() {
  process.exit();
});

