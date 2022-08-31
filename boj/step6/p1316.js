let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const count = Number(input[0]);
let groupChar = 0;
for(let i=1;i<=count;i++){
   
    const str = input[i];
    for(let j = 0; j < str.length; j++){
        const index = str.indexOf(str[j]); 
        
    }

}

console.log(groupChar);