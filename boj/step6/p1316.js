let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const count = Number(input[0]);
let groupChar = 0;
for(let i=1;i<=count;i++){
   
    const str = input[i];
    let isCheck = true;
    for(let j = 0; j < str.length; j++){
        const current = str[j]; //현재 문자
        const currentIndex = str.indexOf(current, j); //현재 인덱스값
        const nextIndex = str.indexOf(current, j+1); //다음 인덱스값

        //같은 문자가 있는 경우, 바로 다음 인덱스값이 아닌 경우
        if(nextIndex > -1 && nextIndex-currentIndex > 1) isCheck = false;
    }

    //그룹 단어인 경우에만 증가
    if(isCheck) groupChar++;
}

console.log(groupChar);