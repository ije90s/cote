const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().toLocaleLowerCase();
const result = new Array(26).fill(0); // 26 길이의 배열 미리 선언

for(let i = 0; i < input.length; i++){
    result[input.charCodeAt(i)-97]++; // 해당 알파벳의 위치(97을 빼는 이유는 a가 97이므로)
}

const max = Math.max(...result); //맥스값
const index = result.indexOf(max); //첫번째의 맥스값 위치
let isSame = false; 

for(let i = 0; i < 26; i++){
    if(result[i] === max && index !== i){  //딴 문자일 경우
        isSame = true;
        break; 
    }
}

console.log(isSame ? '?' : String.fromCharCode(index + 97).toUpperCase());

//참조: https://gurtn.tistory.com/49