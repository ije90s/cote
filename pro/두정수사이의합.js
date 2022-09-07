//문제: https://school.programmers.co.kr//learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = 0;
    const min = Math.min(a,b);
    const max = Math.max(a,b);
    for(let i=min;i<=max;i++){
        answer+=i;
    }
    return answer;
}