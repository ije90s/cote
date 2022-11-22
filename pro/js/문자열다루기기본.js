//문제: https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    const check = /^[0-9]+$/; 
    return check.test(s) && (s.length === 4 || s.length === 6);
}