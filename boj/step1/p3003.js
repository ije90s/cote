const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const chess = [1, 1, 2, 2, 2, 8];

const result = chess.map((number, index) => {
    number = (number <= input[index] ? number - Number(input[index]) : number + Number(input[index]));
});


console.log(result);

//참조 https://7942yongdae.tistory.com/entry/Javascript-Array-map-%EC%82%AC%EC%9A%A9%EB%B2%95
