//문제: https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    return s
      .split("")
      .map((element) => {
        if (element === " ") return " ";
        const code = element.charCodeAt(0);
        if ((code + n > 90 && code <= 90) || code + n > 122) {
          return String.fromCharCode(code + n - 26);
        } else {
          return String.fromCharCode(code + n);
        }
      })
      .join("");
  }