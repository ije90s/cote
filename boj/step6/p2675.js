const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const result = [];
for(let i = 1; i <= count; i++){
    const arr = input[i].split(' ');
    const repeatNum = Number(arr[0]);
    let str = '';
    arr[1].split('').map(el => {
        str += el.repeat(repeatNum);
    });
    result.push(str);
}

console.log(result.join('\n'));

//참조: https://curryyou.tistory.com/199