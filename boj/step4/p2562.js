const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => +v);

const max = Math.max(...input);
const maxIndex = input.findIndex(e => e === max);

console.log(max);
console.log(maxIndex+1);
