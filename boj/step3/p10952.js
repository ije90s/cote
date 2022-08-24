const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const result = [];
let index = 0;
let isCheck = true;
while(isCheck){
    const [a , b] = input[index].split(' ').map(v => +v);
    if(a+b > 0) result.push(a+b);
    else isCheck = false;
    index +=1;
}

console.log(result.join('\n'));