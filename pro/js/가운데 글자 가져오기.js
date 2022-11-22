//문제: https://school.programmers.co.kr//learn/courses/30/lessons/12903

function solution(s) {
    const numberCheck  = s.length%2 === 0 ? true : false;
    const value = Math.floor(s.length/2);
    var answer = '';
    if(!numberCheck) answer = s.slice(value, s.length-value);  
    else answer = s.slice(value-1, s.length-value+1);
    return answer;
}

//다른 풀이 
function solution(s) {
    
    return s.length % 2 !== 0
    ? s[Math.floor(s.length / 2)]
    : s.slice(s.length / 2 - 1, s.length / 2 + 1);;
}
