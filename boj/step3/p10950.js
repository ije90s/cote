const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for(let i = 1; i <= count; i ++){
    const a = Number(input[i].split(' ')[0]);
    const b = Number(input[i].split(' ')[1]);
    console.log(a+b);
}

