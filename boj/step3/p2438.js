const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let str = '';
for(let i = 0; i < Number(input); i++){
    str+='*';
    console.log(str);
}
