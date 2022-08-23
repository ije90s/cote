const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = Number(input[0].split(' ')[0]);
const min = Number(input[0].split(' ')[1]);
const add = Number(input[1]);

let sum = min + add;

if(sum >= 60){

  while(sum >= 60){
      hour+=1;
      sum-=60;
  }

  hour %= 24;
} 

console.log(`${hour} ${sum}`);