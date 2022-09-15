//문제: https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    return strings.sort(function(a,b) {
      if(a[n] > b[n]) return 1;
      if(a[n] === b[n]) return a < b ? -1 : 1;
      if(a[n] < b[n]) return -1;
    });
}