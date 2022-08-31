const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const arr = input[0].split('').map(v => +v); 
let sum = 0; 
for(let i =0; i < count; i++){
    sum += arr[i];
}

console.log(sum);
