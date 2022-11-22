//문제: https://school.programmers.co.kr//learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    var answer = [];
    for(let i =0; i< n; i++){
        let line = '';
        let temp = (arr1[i] | arr2[i]).toString(2);
        for (let j = 0, len = temp.length; j < n - len; j++){
            temp= ' '+temp;
        }
        temp.split('').map(el => el === '1' ? line=line+'#' : line=line+' ');
        answer.push(line);
    }
    return answer;
}

//다른 풀이(정규식 이용)
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;  //길이만큼 없으면 앞에 0을 채워줌
}

//참조: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat