const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const a = Number(input[0]);

for(let i = 1; i< 10; i++){
    console.log(`${a} * ${i} = ${a*i}`);
}


