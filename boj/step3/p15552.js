const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].trim().split(' ');
    result.push(Number(a) + Number(b));
}
console.log(result.join('\n'));

// 참조 https://velog.io/@exploit017/%EB%B0%B1%EC%A4%80-Node.js-15552%EB%B2%88%EB%B9%A0%EB%A5%B8-AB-Node.js%EB%A1%9C-%ED%95%B4%EA%B2%B0%ED%95%A0-%EC%88%98-%EC%97%86%EC%9D%8C