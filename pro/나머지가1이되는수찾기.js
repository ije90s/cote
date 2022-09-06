//문제: https://school.programmers.co.kr//learn/courses/30/lessons/87389

function solution(n) {
    var answer = 0;
    let i = 1;
    while(true){
        if(n % i === 1) {
            answer = i; 
            break;
        }
        i++;
    }
    return answer;
}