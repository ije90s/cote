const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().split("\n"); 

// console.log(input.join('??!'));

const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(`${input}??!`);

//참조: https://gent.tistory.com/471
//trim() 쓰는 이유: https://www.acmicpc.net/board/view/87132