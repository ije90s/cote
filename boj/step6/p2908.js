const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').reverse().join('');

const [a, b]= input.split(' ');

console.log(Math.max(a, b));

//참조: https://webisfree.com/2021-04-01/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AC%B8%EC%9E%90%EC%97%B4%EC%9D%84-%EC%97%AD%EC%88%9C%EC%9C%BC%EB%A1%9C-%EB%B0%98%ED%99%98%ED%95%98%EA%B8%B0-reverse-string