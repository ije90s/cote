//문제: https://school.programmers.co.kr//learn/courses/30/lessons/12954

function solution(x, n) {
    var answer = [];
    let i = 1;
    while(i <= n){
        answer.push(x*i); 
        i++;
    }
    return answer;
}

function solution(x, n) {
    return Array(n).fill(x).map((v, i) => v * (i+1));
}