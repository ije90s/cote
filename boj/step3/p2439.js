const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const result = [];

for(let i=Number(input);i>0;i--) {
    let str = '';
    for(let j=i-1;j>0;j--) {str+=' '; }
    for(let k=i;k<Number(input)+1;k++) {str+='*';}		
    result.push(str);
}

console.log(result.join('\n'));