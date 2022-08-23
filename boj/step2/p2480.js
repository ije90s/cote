const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => +v);

// const arr = [];
// input.forEach((el) => {
//   if(!arr.includes(el)) arr.push(el);
// });

// let value = 0;
// let sum = 0;
// if(arr.length === 3){
//   value = Math.max.apply(null, input);
//   sum = value*100;
// }else if(arr.length === 2){
//     if(input[0] === input[1] || input[0] === input[2]) value = input[0];
//     else value = input[1];
//   sum = 1000+value*100;
// }else{
//   value = input[0];
//   sum = 10000+value*1000;
// }
// console.log(sum);

const a = input[0];
const b = input[1];
const c = input[2];
let sum = 0;
let value = 0;
if(a === b && b === c && a === c){
    value = a;
    sum = 10000+value*1000;
}else if(a !== b && b !== c && a !== c){
    value = Math.max(a, b, c);
    sum = 100*value;
}else {
    if(a === b || a === c) value = a;
    else value = b;
    sum = 1000+value*100;
}
console.log(sum);

// 참조 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max