const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

// const n = Number(input);
// let a = 0, b = 0, i = 0, result = 0;
// while(n !== result){
//     if(i==0) {
//         a=Math.floor(n/10);
//         b=n%10;
//     }else {
//         a=Math.floor(result/10); 
//         b=result%10;
//     }
//     result = Number(b+""+((a+b)%10));
//     i+=1;
// }
// if(n === 0) i = 1;

//다른 방법
var start = parseInt(input);
var i = 0;
while (true) {
    var end = (10*(start%10) + (((start%10) + Math.floor(start/10)))%10); //한꺼번에 계산
    start = end
    i++;
    if(input == end) {
        break;
    }
}
console.log(i);

console.log(i);

