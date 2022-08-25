const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v);

const result = [];
for(let i = 0; i < input.length; i++){
    const value = input[i]%42;
    if(!result.includes(value)) result.push(value);
}

console.log(result.length);