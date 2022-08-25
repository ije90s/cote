const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = Number(input[0]);
const arr = input[1].split(' ');

let max = Number(arr[0]);
let min = Number(arr[0]);

for(let i = 1; i< arr.length; i++){
    if(arr[i] > max) max = Number(arr[i]);
    if(arr[i] < min) min = Number(arr[i]);
}

console.log(`${min} ${max}`);

