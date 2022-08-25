const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const cases = Number(input[0]); //전체 케이스 수
const result = [];
for(let i = 1; i <= cases; i++){
    const arr = input[i].split(' ').map(v => +v);
    const lineCount = arr[0]; //라인별 총 개수
    let sum = 0, count = 0; 
    for(let j = 1; j <= lineCount; j++){
        sum += arr[j]; //합산
    }
    const avg = sum / lineCount; //평균값
    for(let j = 1; j <= lineCount; j++){
        if(avg < arr[j]) count++; //평균값보다 크면 count 증가
    }
    const total = (count/lineCount*100).toFixed(3);
    console.log(`${total}%`);
}




// 참조 https://hianna.tistory.com/446