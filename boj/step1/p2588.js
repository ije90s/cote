const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const a = Number(input[0]);
const b = Number(input[1]);

// split 써서 쪼개거나
const arr = input[1].split(''); 

//십단위로 쪼개서
// const oneNum = Num2 % 10;
// const tenNum = Math.floor((Num2 % 100) / 10);
// const hundredNum = Math.floor(Num2 / 100);

console.log(a * Number(arr[2]));
console.log(a * Number(arr[1]));
console.log(a * Number(arr[0]));
console.log(a * b);