const fs = require('fs');

do{
    const input = fs.readFileSync('/dev/stdin').toString().split(' ');
    const a = Number(input[0]);
    const b = Number(input[1]);
    if(a > 0 && b < 10){
        console.log(a-b);
        break; 
    }
}while(true);
