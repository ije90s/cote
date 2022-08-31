const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(input.charCodeAt(0));

//참조: https://www.delftstack.com/ko/howto/javascript/javascript-convert-character-code-to-ascii-code/