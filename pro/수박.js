//문제: https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    var answer = '';
    for(let i=1; i<=n; i++){
        if(i%2===1) answer+='수';
        else answer+='박';
    }
    return answer;
}