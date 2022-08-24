const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [a, b] = input[0].split(' ').map(v => +v);
const numbers = input[1].split(' ').map(v => +v);
const result = [];
for(let i = 0; i < a;i++){
    if(numbers[i] < b) result.push(numbers[i]);
}

console.log(result.join(' '));