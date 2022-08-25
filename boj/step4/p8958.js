const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const result = [];

for(let i =1; i<= count; i++){
    const arr = input[i];
    let sum = 0, score = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] === 'O'){
            score++; 
            sum+=score;
        }else{
            score = 0;
        }
    }
    result.push(sum);
}

console.log(result.join('\n'));