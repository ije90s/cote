const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const arr = input[1].split(' ').map(v => +v);
const max = Math.max(...arr); 
let sum = 0; 

//새로운 평균 계산
arr.forEach(el => sum+=((el/max)*100));

console.log((sum / count).toFixed(5));

//참조 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed