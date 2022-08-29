const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function HansuCheck(value){
    let count = 0;
    for(let i =1; i<= Number(value); i++){
        if(i < 100) count++; 
        else{
            const hun = Math.floor(i/100);
            const ten = (Math.floor(i/10)%10);
            const one = i%10;
            if((hun-ten) === (ten-one)) count++;
        }
    }
    return count;
}

const result = HansuCheck(input);
console.log(result);