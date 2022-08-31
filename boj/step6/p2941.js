const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const list = 'c=|c-|dz=|d-|lj|nj|s=|z=';
const regexp = new RegExp(list, "g"); //정규식으로 선언
const replaced = input.replace(regexp, "*"); //정규식에 포함되어 있으면 *로 변경

console.log(replaced.length);

//참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions