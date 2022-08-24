const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const total = Number(input[0]);
const totalCount = Number(input[1]);

let sum = 0;
for(let i =0; i< totalCount; i++){
    const price = Number(input[i+2].split(' ')[0]);
    const count = Number(input[i+2].split(' ')[1]); 
    sum += (price*count);
}

if(total === sum) console.log('Yes');
else console.log('No');